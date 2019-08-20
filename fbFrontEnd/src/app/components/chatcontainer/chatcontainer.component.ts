import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CommunicationService } from 'src/app/services/communication.service';
import { Friends } from 'src/app/models/friends';
import { ChatControl } from './chatcontrol';
import * as Stomp from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';

var stompClient = null;

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
}