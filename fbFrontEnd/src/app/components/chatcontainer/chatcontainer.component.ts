import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CommunicationService } from 'src/app/services/communication.service';
import { ChatControl } from './chatcontrol';
import * as Stomp from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';

var stompClient = null;
var chatInfoMap: Map<string, object> = new Map<string, object>();
class ChatInformation { chatRoomID: string; status: string; };

@Component({
  selector: 'app-chatcontainer',
  templateUrl: './chatcontainer.component.html',
  styleUrls: ['./chatcontainer.component.css']
})

export class ChatcontainerComponent implements OnInit
{
  isLoggedIn$: Observable<boolean>;
  public adapter: ChatControl = new ChatControl();

  constructor(private authService: AuthenticationService, private commService: CommunicationService) { }

  ngOnInit() 
  {
    this.isLoggedIn$ = this.authService.isLoggedIn;
    this.isLoggedIn$.subscribe(res => 
      {
        if(res == true)
        {
          this.getFriendsList();
        }
      });
  }

  getFriendsList()
  {
      this.commService.getFriendsList().subscribe(res => {
      this.adapter.setFriendsList(res);
    },
      error => { console.log(error); });      
  }
  
  public userChatOpened(event: any)
  {
    if (chatInfoMap.has(event.id))
    {
       console.log("Key exists");
       console.log(chatInfoMap.get(event.id));
    }
    else
    {
       console.log("Create new chatroom");
       this.createchatroom(event.id);
       console.log(chatInfoMap.get(event.id));
       this.connectToChat(event.id);
    }
    console.log(event.id + " " + localStorage.getItem('userImageID'));
  }
  
  createchatroom(chatroomID: string)
  {
    let chatRmInf = new ChatInformation();
    chatRmInf.chatRoomID = chatroomID;    
    chatRmInf.status = "unsubscribed";
    chatInfoMap.set(chatroomID,chatRmInf);
  }

  connectToChat(chatRoomID: string)
  {
    var that = this;
    const socket = new SockJS('http://localhost:8080/chat');
    stompClient = Stomp.over(socket);
    var chatRoomInfo = chatInfoMap.get(chatRoomID) as ChatInformation;
    stompClient.connect({}, 
      function(frame)
      {
        console.log( "Connected :- " + frame );
        if (chatRoomInfo.status === "unsubscribed")
        {
          console.log("Subscribing to " );
          stompClient.subscribe(`/user/queue/messages`, 
          function(messageOutput)
          {
            that.onMessageReceived(JSON.parse(messageOutput.body));
          });
          chatRoomInfo.status = "subscribed";  
        }
      }, 
      this.onError);    
  }

  onError(error:any)
  {
    console.log("Error Websocket" + error);
  }

  onMessageReceived(payload)
  {
    console.log("Message received");
    console.log(payload);
    this.adapter.insertMessage(payload.sender, payload.content);
  }
}