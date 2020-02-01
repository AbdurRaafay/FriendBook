import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { AuthenticationService } from 'src/app/services/authentication.service';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit 
{
  loginFormValid: boolean = false;
  loginFailure: boolean = false;
  emailPattern = "^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$";
  loginForm: FormGroup;
  validation_messages = 
  {
    'username': 
    [
      { type: 'required', message: 'Username is required' },
      { type: 'minlength', message: 'Username must be at least 7 characters long' },
      { type: 'maxlength', message: 'Username cannot be more than 25 characters long' },
      { type: 'pattern', message: 'Enter a valid email' }
    ],
    'password': 
    [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'Password must be at least 5 characters long' }
    ]
  };

  constructor(private commService: CommunicationService, private router:Router, private authService: AuthenticationService, private fb: FormBuilder){}
  
  ngOnInit()
  {
    this.createLoginForm();
    this.logoutuser();
  }

  createLoginForm()
  {
    this.loginForm = this.fb.group
    ({
      username: new FormControl('', Validators.compose([Validators.maxLength(25), Validators.minLength(5), Validators.pattern(this.emailPattern), 
        Validators.required])),
      password: new FormControl('', Validators.compose([Validators.maxLength(25), Validators.minLength(5), Validators.required]))
    })
  }

  logoutuser()
  {
    var logInResult = localStorage.getItem('isLoggenIn');
    if (logInResult === 'true')//Check if we are a fresh login page or redirect
    {
      var token = localStorage.getItem('xAuthToken');
      console.log(token);
      this.commService.checkSession(token).subscribe(res=>
        {
          console.log(res);
          if(res['status'] === 'SESSION_ACTIVE')
          {
            console.log('Already logged in');
            this.commService.logout().subscribe(res=>//Logout the currently logged in user
              {
                if(res['status'] === 'LOGOUT_SUCCESS')
                {
                  console.log('Logged out');
                  localStorage.clear();            
                }
              });      
          }
        }, 
        error => { console.log(error); });
    }
  }

  onFormSubmit(value)
  {
    if(this.loginForm.valid)
    {
      localStorage.clear();
      var usrName = this.loginForm.get('username').value;
      var passWord = this.loginForm.get('password').value;
      console.log(usrName + "  " + passWord);
      this.commService.sendCredential(usrName , passWord).subscribe
      (
        res => 
        {
          console.log(res);
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
          this.loginFailure = true;
          console.log(error);
        }
      );
    }
  }

  onRegister()
  {
    this.router.navigate(['/register']);
  }
}