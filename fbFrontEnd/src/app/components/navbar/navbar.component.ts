import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CommunicationService } from 'src/app/services/communication.service';
import * as Stomp from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { MatMenuTrigger } from '@angular/material';

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

export class NavbarComponent implements OnInit 
{
  isLoggedIn$: Observable<boolean>;
  mainMenuItems: MenuItem[] = [{path:'abc',title:'xyz'},{path:'ding',title:'dong'}];
  @ViewChild(MatMenuTrigger, {static: false}) notificationMenu: MatMenuTrigger;

  constructor(private router:Router, private authService: AuthenticationService, private commService: CommunicationService) { }

  ngOnInit() 
  {
    this.isLoggedIn$ = this.authService.isLoggedIn;
    this.isLoggedIn$.subscribe(res => 
      {
        if(res == true)
        {
          this.connectToNotification();
        }
      });    
  }

  connectToNotification()
  {
    var that = this;
    const socket = new SockJS('http://localhost:8080/notification');
    stompClientNotification = Stomp.over(socket);
    stompClientNotification.connect({}, 
      function(frame)
      {
        console.log( "Notification Connected :- " + frame );
        stompClientNotification.subscribe(`/user/notificationqeue/messages`, 
        function(messageOutput)
        {
          that.onNotificationMessageReceived(JSON.parse(messageOutput.body));
        });
    }, 
      this.onNotificationError);    
  }

  onNotificationError(error:any)
  {
    console.log("Error Notification Websocket" + error);
  }

  onNotificationMessageReceived(payload)
  {

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
  }
}