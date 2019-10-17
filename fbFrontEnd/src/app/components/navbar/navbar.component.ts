import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CommunicationService } from 'src/app/services/communication.service';
import { MatMenuTrigger } from '@angular/material';
import { WebsocketmessagingService } from 'src/app/services/websocketmessaging.service';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

interface SearchItem 
{
  name: string;
  imageID: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit
{
  isLoggedIn$: Observable<boolean>;
  enableNotification: boolean = false;
  isSearchLoading: boolean = false;
  noOfNotification: number = 0;
  alreadyClicked: Array<string> = [];
  searchFormControl = new FormControl();
  autoCompleteList: SearchItem[] = [];
  menuItems: Array<any> = [];
  
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
          this.wscommService.notificationObs.subscribe(notres=>
          { this.onNotificationMessageReceived(notres); });           
        }
      });
    this.wscommService.searchObs.subscribe(seres=>{ this.onSearchMessageReceived(seres); });

    //Introduce delay so that not too many calls to the backend are generated
    this.searchFormControl.valueChanges.pipe(debounceTime(500), distinctUntilChanged()).subscribe(val=>{this.onSearchChange(val);});
  }

  onNotificationMessageReceived(payload: any)
  {
    let menuItemText = payload.userFullName;
    let mItem: any; 
    if(payload.type === 'FRIEND_REQUEST')
    {
      menuItemText += " has sent a friend request";
      mItem = {text: menuItemText, userImageID: payload.usrImageID, userFullName: payload.usrFullName, menuItemType: 'FRIEND_REQUEST'};
    }
    else
    {
      if(payload.type === 'NEWPOST')
        menuItemText += " has made a post";
      else if(payload.type === 'LIKE')
        menuItemText += " has liked a post";
      else if(payload.type === 'DISLIKE')
        menuItemText += " has disliked a post";
      else if(payload.type === 'COMMENT')
        menuItemText += " has commented on a post";
      if(payload.hasOwnProperty('postID'))
      {
        mItem = {text: menuItemText, postID: payload.postID, userImageID: payload.usrImageID, userFullName: payload.usrFullName, menuItemType: 'POST'};
      }
      else
      {
        mItem = {text: menuItemText, userImageID: payload.usrImageID, userFullName: payload.usrFullName, menuItemType: 'POST'};
      }
    }
    this.menuItems.push(mItem);
    this.enableNotification = true;
    this.noOfNotification++;
  }

  onSearchMessageReceived(payload)
  {
    var searchList: any;
    searchList = payload;
    this.autoCompleteList.length = 0;
    searchList.forEach(t => { var abc = {name: t.userName, imageID: t.imageID}; this.autoCompleteList.push(abc);}); 
  }

  onNotificationClicked()
  {
    if(this.enableNotification)
    {
      this.notificationMenu.openMenu();
    }
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

  onNotificationItemSelected(menuItem: any)
  {
    if (typeof this.alreadyClicked.find(x => x === menuItem.postID) === 'undefined')
    {
      this.alreadyClicked.push(menuItem.postID);//Put this notification menu item in seen list
      if(this.noOfNotification > 0)
        this.noOfNotification--;   
      if(this.noOfNotification === 0)
        this.enableNotification = false;
    }
    if(menuItem.menuItemType === 'POST')
    {
      if(!menuItem.hasOwnProperty('postID'))//Non friend post
      {
        this.router.navigate(['/friendrequest', menuItem.imageID, menuItem.name]);
      }  
    }
    this.router.navigate(['/singlepost', menuItem.postID]);
  }
  
  onSearchChange(searchValue: string)
  {
    this.wscommService.sendSearchMessage(searchValue);
  }
  
  onSearchItemSelected(event: any, srcItm: SearchItem)
  {
    var isSelfSelected = srcItm.imageID === localStorage.getItem('userImageID');
    var existInFriendsList = localStorage.getItem(srcItm.imageID);  
    if(typeof existInFriendsList === 'string')//Friend selected
    {
      this.router.navigate(['/friendswall', srcItm.imageID]);
    }
    else if(existInFriendsList === null && !isSelfSelected)//New person selected and it is not us
    {
      this.router.navigate(['/friendrequest', srcItm.imageID, srcItm.name]);
    }
  }
}