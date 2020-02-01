import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService
{
  private loggedIn = new BehaviorSubject<boolean>(false);

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
  }  
}