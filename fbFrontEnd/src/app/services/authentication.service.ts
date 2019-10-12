import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CommunicationService } from './communication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService
{
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private commService: CommunicationService) { }

  get isLoggedIn()
  {
    return this.loggedIn.asObservable();
  }

  login()
  {
    this.loggedIn.next(true);
  }

  logout() 
  {
    this.loggedIn.next(false);
    this.commService.logout();
  }  
}