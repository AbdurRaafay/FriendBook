import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit 
{
  constructor(private commService: CommunicationService, private router:Router, private authService: AuthenticationService){}
  
  ngOnInit()
  {
    var logInResult = localStorage.getItem('isLoggenIn');
    if (logInResult === 'true')//Check if we are a fresh login page or redirect
    {
      var token = localStorage.getItem('xAuthToken');
      console.log(token);
      this.commService.checksession(token).subscribe(res=>
        {
          console.log(res);
          if(res['status'] === 'SESSION_ACTIVE')
          {
            console.log('Already logged in');
            this.commService.logout().subscribe(res=>//Logout the currently logged in user
              {
                if(res['status'] === 'LOGOUT_SUCCESS')
                {
                  localStorage.clear();            
                }
              });      
          }
        }, 
        error => { console.log(error); });
    }
  }

  onClickMe(usrname: string)
  {
    localStorage.clear();
    this.commService.sendCredential(usrname + "@foo.com","hajmola").subscribe(
      res => 
      {
        localStorage.setItem('xAuthToken', res[0].token);
        localStorage.setItem('isLoggenIn', 'true');
        localStorage.setItem('resetNotificationMenu', 'true');      
        localStorage.setItem("userImageID", res[0].userImageID);
        localStorage.setItem("currentUserName", res[0].currentUserName);
        this.authService.login();
        this.router.navigate(['/newsfeed']);
  		},
      error => 
      {
  			console.log(error);
  		}
    );
  }
}