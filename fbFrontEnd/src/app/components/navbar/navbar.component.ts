import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CommunicationService } from 'src/app/services/communication.service';
import * as Stomp from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { MatMenuTrigger, MatMenu } from '@angular/material';
import { WebsocketmessagingService } from 'src/app/services/websocketmessaging.service';

var stompClientNotification = null;

export class MenuItem 
{
  path: string;
  title: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit, OnDestroy 
{
  isLoggedIn$: Observable<boolean>;

  menuItems: Array<{text: string, postID: string}> = 
  [
//    {text: "Tabledriven.Item1", postID: "123" },
//    {text: "Tabledriven.Item2", postID: "456"},
  ];
  
  @ViewChild(MatMenuTrigger, {static: false}) notificationMenu: MatMenuTrigger;

  constructor(private router:Router, private authService: AuthenticationService, private commService: CommunicationService, 
    private wscommService: WebsocketmessagingService) {}

  ngOnInit() 
  {
    this.isLoggedIn$ = this.authService.isLoggedIn;
    this.isLoggedIn$.subscribe(res => 
      {
        if(res == true)
        {
          this.wscommService.notificationObs.subscribe(res=>
          {
                this.onNotificationMessageReceived(res);
          });

        }
      });    
  }

  ngOnDestroy()
  {
    stompClientNotification.disconnect();  
  }

  onNotificationMessageReceived(payload)
  {
    //this.menuItems.push();
    console.log(payload);
  }

  onNewsFeedClicked()
  {
    this.router.navigate(['/newsfeed']);
  }

  onWallClicked()
  {
    this.router.navigate(['/wall']);
  }

  onNotificationClicked()
  {
    console.log(this.notificationMenu.menuOpen);  
  }
  
  onLogoutClicked()
  {
    this.authService.logout();
    this.router.navigate(['/index']);
  }

  select(pText :string)
  {
  }  
}