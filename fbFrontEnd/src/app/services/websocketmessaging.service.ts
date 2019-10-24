import { Injectable } from '@angular/core';

import * as Stomp from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { Subject } from 'rxjs';

var stompClient = null;

@Injectable({
  providedIn: 'root'
})

export class WebsocketmessagingService 
{
  private chatSubject = new Subject<any>();
  chatObs = this.chatSubject.asObservable(); 
  
  private onlineSubject = new Subject<any>();
  onlineObs = this.onlineSubject.asObservable(); 

  private notificationSubject = new Subject<any>();
  notificationObs = this.notificationSubject.asObservable(); 

  private searchSubject = new Subject<any>();
  searchObs = this.searchSubject.asObservable(); 

  private newFriendSubject = new Subject<any>();
  newFriendObs = this.newFriendSubject.asObservable(); 

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

  onMessageReceived(payload: any)
  {
    if(payload.hasOwnProperty('content'))//Chat message
      this.chatSubject.next(payload);
    else if(payload.hasOwnProperty('type'))
    {
      if(payload.type === 'FRIEND_REQUEST' || payload.type === 'COMMENT' || payload.type === 'LIKE' || payload.type === 'DISLIKE' || payload.type === 'NEWPOST' )
        this.notificationSubject.next(payload);
      else if(payload.type === 'FRIEND_LIST_UPDATE')
        this.newFriendSubject.next(payload);//Add new friend to friends list
      else if(payload.type === 'ONLINE_STATUS')
        this.onlineSubject.next(payload);
    }      
    else if(Array.isArray(payload))//Search messages are returned as Array
    {
      this.searchSubject.next(payload);  
    }
  }

  sendChatMessage(toId: string, fromId: string, message: string)
  {
    var chatMessage = { chatMessage: 'CHAT', sender: localStorage.getItem('userImageID'), recipient: toId, content: message };
    var topic = `/app/chat`;    
    stompClient.send(`${topic}`, {}, JSON.stringify(chatMessage)); 
  }

  sendSearchMessage(searchText: string)
  {
    var chatMessage = { content: searchText };
    var topic = `/app/search`;    
    stompClient.send(`${topic}`, {}, JSON.stringify(chatMessage)); 
  }
}
