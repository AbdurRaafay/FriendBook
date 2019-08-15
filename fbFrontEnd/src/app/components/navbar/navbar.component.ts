import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CommunicationService } from 'src/app/services/communication.service';

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
    console.log("NavBar" + this.isLoggedIn$);
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