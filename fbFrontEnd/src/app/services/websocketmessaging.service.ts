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
    if(payload.hasOwnProperty('onlineStatusMessage'))
      this.onlineSubject.next(payload);
    else if(payload.hasOwnProperty('content'))
      this.chatSubject.next(payload);
    else if(payload.hasOwnProperty('entityID'))
      this.notificationSubject.next(payload);  
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
