import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
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
          this.wscommService.notificationObs.subscribe(notres=>
          { this.onNotificationMessageReceived(notres); });           
        }
      });
    this.wscommService.searchObs.subscribe(seres=>{ this.onSearchMessageReceived(seres); });

    //Introduce delay so that not too many calls to the backend are generated
    this.searchFormControl.valueChanges.pipe(debounceTime(500), distinctUntilChanged()).subscribe(val=>{this.onSearchChange(val);});
  }

  onNotificationMessageReceived(payload)
  {
    if(payload.type === 'FRIEND_REQUEST')
    {
      let menuItemText = payload.usrfromFullName;
      menuItemText += " has sent a friend request";
      let abc = {text: menuItemText, postID: payload.entityID};
      this.menuItems.push(abc);
      this.enableNotification = true;
      this.noOfNotification++;  
    }
    else
    {
      let menuItemText = localStorage.getItem(payload.usrID);
      if(payload.type === 'NEWPOST')
        menuItemText += " has made a post";
      else if(payload.type === 'LIKE')
        menuItemText += " has liked a post";
      else if(payload.type === 'DISLIKE')
        menuItemText += " has disliked a post";
      else if(payload.type === 'COMMENT')
      menuItemText += " has commented on a post";
      let abc = {text: menuItemText, postID: payload.entityID};
      this.menuItems.push(abc);
      this.enableNotification = true;
      this.noOfNotification++;  
    }
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
  
  onSearchChange(searchValue: string)
  {
    this.wscommService.sendSearchMessage(searchValue);
  }
  
  onSearchItemSelected(event: any, srcItm: SearchItem)
  {
    if (typeof localStorage.getItem(srcItm.imageID) === 'string')//Friend selected
    {
      if(localStorage.getItem(srcItm.imageID) !== localStorage.getItem('userImageID'))//Dont load our own wall from here 
      {
        this.router.navigate(['/friendswall', srcItm.imageID]);
      }
    }
    else if (typeof localStorage.getItem(srcItm.imageID) === 'undefined')//New person selected
    {

    }
  }
}