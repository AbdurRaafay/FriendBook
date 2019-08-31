import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CommunicationService } from 'src/app/services/communication.service';

var stompClientNotification = null;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit 
{
  isLoggedIn$: Observable<boolean>;

  constructor(private router:Router, private authService: AuthenticationService, private commService: CommunicationService) { }

  ngOnInit() 
  {
    this.isLoggedIn$ = this.authService.isLoggedIn;
    this.isLoggedIn$.subscribe(res => 
      {
        if(res == true)
        {
          // this.getFriendsList();
        }
      });    
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

  }
  
  onLogout()
  {
    this.authService.logout();
  }
}