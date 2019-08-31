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
    this.adapter.callHome = this.sendChat;
    this.isLoggedIn$ = this.authService.isLoggedIn;
    this.isLoggedIn$.subscribe(res => 
      {
        if(res == true)
        {
          this.getFriendsList();
          this.connectToChat();
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

  connectToChat()
  {
    var that = this;
    const socket = new SockJS('http://localhost:8080/chat');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, 
      function(frame)
      {
        console.log( "Connected :- " + frame );
        stompClient.subscribe(`/user/queue/messages`, 
        function(messageOutput)
        {
          that.onMessageReceived(JSON.parse(messageOutput.body));
        });
    }, 
      this.onError);    
  }

  onError(error:any)
  {
    console.log("Error Websocket" + error);
  }

  onMessageReceived(payload)
  {
    if(payload.hasOwnProperty('onlineStatusMessage'))
      this.adapter.setOnlineStatus(payload);
    else
      this.adapter.insertMessage(payload);
  }

  sendChat(userTo: string, userFrom: string, message: string)
  {
    var chatMessage = { sender: localStorage.getItem('userImageID'), recipient: userTo, content: message, messageType: 'CHAT' };
    var topic = `/app/chat`;    
    stompClient.send(`${topic}`, {}, JSON.stringify(chatMessage));  
  }
}