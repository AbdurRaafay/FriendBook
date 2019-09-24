import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CommunicationService } from 'src/app/services/communication.service';
import { MatMenuTrigger } from '@angular/material';
import { WebsocketmessagingService } from 'src/app/services/websocketmessaging.service';
import { FormControl } from '@angular/forms';

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
  enableNotification: boolean = false;
  noOfNotification: number = 0;
  alreadyClicked: Array<string> = [];
  searchFormControl = new FormControl();
  menuItems: Array<{text: string, postID: string}> = [];
  
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
    var menuItemText = localStorage.getItem(payload.usrID);
    
    if(payload.type === 'NEWPOST')
      menuItemText += " has made a post";
    else if(payload.type === 'LIKE')
      menuItemText += " has liked a post";
    else if(payload.type === 'DISLIKE')
      menuItemText += " has disliked a post";
    else if(payload.type === 'COMMENT')
      menuItemText += " has commented on a post";
    
    var abc = {text: menuItemText, postID: payload.entityID};
    this.menuItems.push(abc);
    this.enableNotification = true;
    this.noOfNotification++;
  }

  onNewsFeedClicked()
  {
    this.router.navigate(['/newsfeed']);
  }

  onWallClicked()
  {
    this.router.navigate(['/wall']);
  }

  onLogoutClicked()
  {
    this.authService.logout();
    this.router.navigate(['/index']);
  }

  select(pText :string)
  {
    if (typeof this.alreadyClicked.find(x => x === pText) === 'undefined')
    {
      this.alreadyClicked.push(pText);
      if(this.noOfNotification > 0)
        this.noOfNotification--;   
      if(this.noOfNotification === 0)
        this.enableNotification = false;
    }      
    this.router.navigate(['/singlepost', pText]);
  }  
}