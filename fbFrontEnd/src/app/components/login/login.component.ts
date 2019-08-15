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

  constructor(private commService: CommunicationService, private router:Router, private authService: AuthenticationService) { }

  ngOnInit() 
  {
    localStorage.clear();
    localStorage.setItem('isLoggenIn', 'false');    
  }

  onClickMe(usrname: string)
  {
    this.commService.sendCredential(usrname + "@foo.com","hajmola").subscribe(
      res => 
      {
        //localStorage.setItem("xAuthToken", );
        console.log(res);
        localStorage.setItem('isLoggenIn', 'true');        
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