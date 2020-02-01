import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl, FormGroupDirective, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs/operators';
import { ErrorStateMatcher } from '@angular/material';
import { Observable } from 'rxjs';

import { AuthenticationService } from 'src/app/services/authentication.service';
import { CommunicationService } from 'src/app/services/communication.service';

class PasswordErrorStateMatcher implements ErrorStateMatcher 
{
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean 
  {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);
    return (invalidCtrl || invalidParent);    
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit 
{
  registrationInProgress: boolean = false;
  registerFailure: boolean = false;
  hasValidImageFile: boolean = false;
  selectFileTouched: boolean = false;
  passwordMatchError: boolean = false;
  selectedFileName: string = "";
  errorMatcher = new PasswordErrorStateMatcher();
  uploadData = new FormData();
  emailPattern = "^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$";
  passwordPattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$";
  phonePattern = "^[\+][0-9]{1,3}[0-9]{4,14}$";
  registerForm: FormGroup;
  genders = [ "Male", "Female", "Other" ];
  selectedFile: File

  validation_messages = 
  {
    'email': 
    [
      { type: 'required', message: 'Email is required' },
      { type: 'minlength', message: 'Email must be at least 7 characters long' },
      { type: 'maxlength', message: 'Email cannot be more than 25 characters long' },
      { type: 'pattern', message: 'Enter a valid email' },
      { type: 'emailnotavailable', message: 'Email not available' }           
    ],
    'firstname': 
    [
      { type: 'required', message: 'First name is required' },
    ],
    'lastname': 
    [
      { type: 'required', message: 'Last name is required' },
    ],
    'password': 
    [
      { type: 'required', message: 'Password is required' },
      { type: 'pattern', message: 'Enter a valid password' }      
    ],
    'confirm_password': 
    [
      { type: 'required', message: 'Confirm password is required' },
    ],    
    'phone': 
    [
      { type: 'required', message: 'Phone is required' },
      { type: 'pattern', message: 'Enter a valid phone number' }
    ],
    'gender': 
    [
      { type: 'required', message: 'Gender is required' }
    ],
    'birthday': 
    [
      { type: 'required', message: 'Birthday is required' }
    ],
  };

  constructor(private commService: CommunicationService, private router:Router, private authService: AuthenticationService, private fb: FormBuilder) { }

  ngOnInit() 
  {
    this.registerForm = this.fb.group
    ({
      firstname: new FormControl('', [Validators.maxLength(25), Validators.minLength(2), Validators.required]),
      lastname: new FormControl('', [Validators.maxLength(25), Validators.minLength(2), Validators.required]),
      password: new FormControl('', [Validators.maxLength(25), Validators.minLength(5), Validators.pattern(this.passwordPattern),
        Validators.required]),
      confirm_password: new FormControl('', ),
      email: new FormControl('', [Validators.maxLength(25), Validators.minLength(5), Validators.pattern(this.emailPattern), 
          Validators.required], this.checkValidEmail.bind(this)),
      gender: new FormControl(this.genders[0], Validators.required),
      birthday: new FormControl('', Validators.required),  
      phone: new FormControl('', [Validators.minLength(10), Validators.pattern(this.phonePattern), Validators.required])
    },{validators : this.passwordValidator})
  }

  checkValidEmail(control: AbstractControl)
  {
    var c : string = control.value;
    if(c.length > 6 && c.indexOf('@') !== -1 && c.indexOf('.') !== -1)
    {
      return new Promise(resolve => 
        {
          new Observable(observer => observer.next(c)).pipe
          (
            debounceTime(500),
            distinctUntilChanged(),
            switchMap((value) => { return this.commService.checkEmailAvailability(value as string) })
          )
          .subscribe
          (
            (res) => 
            {
              console.log(res);
              if (res.status === 'AVAILABLE') 
              {
                resolve(null);
              } 
              else if (res.status === 'NOT_AVAILABLE')
              {
                resolve({ emailnotavailable : true });
              }
            }
          )
        });    
    }
    else
    {
      return new Promise(resolve => {resolve(null);});
    }
  }

  passwordValidator(form: FormGroup) 
  {
    var pass : string = form.get('password').value;
    var conpass : string = form.get('confirm_password').value;
    const condition = pass === conpass;
    return condition ? null : { notSame: true }
  }

  onRegisterFormSubmit(value)
  {
    if(this.registerForm.valid)
    {
      var userData = 
      { 
        firstname: this.registerForm.get('firstname').value, 
        lastname: this.registerForm.get('lastname').value,
        password: this.registerForm.get('password').value,
        phone: this.registerForm.get('phone').value,
        birthday: this.registerForm.get('birthday').value,
        email: this.registerForm.get('email').value,
        gender: this.registerForm.get('gender').value
      };
      this.uploadData.append('userData', JSON.stringify(userData));
      this.registrationInProgress = true;
      this.commService.registerNewUser(this.uploadData).subscribe((event: HttpEvent<any>) =>
      {
        localStorage.clear();
        switch (event.type) 
        {
          case HttpEventType.Sent:
            console.log('Request has been made!');
            break;
          case HttpEventType.ResponseHeader:
            console.log('Response header has been received!');
            break;
          case HttpEventType.UploadProgress:
            var progress = Math.round(event.loaded / event.total * 100);
            console.log(`Uploaded! ${progress}%`);
            break;
          case HttpEventType.Response:
            { 
              if(event.body.status === "REGISTRATION_SUCCESSFUL")
              {
                console.log('Registration Successful');
                this.commService.sendCredential(userData.email, userData.password).subscribe
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
                    //this.loginFailure = true;
                    console.log(error);
                  }
                );
              }
            }                        
        }
      },   
      error => { console.log(error); });      
    }
  }

  onFileChanged(event)
  {
    let fr = new FileReader;
    let img = new Image();
    fr.onload = () => 
    {
      img.onload = () => 
      {
         console.log(img.width + " " + img.height);
         if(img.width == 400 && img.height == 400)
         {
           this.hasValidImageFile = true;
           this.selectedFile = event.target.files[0];
           this.selectedFileName = this.selectedFile.name;
           this.uploadData.append('imageFile', this.selectedFile, this.selectedFile.name);
         }          
         else
         this.hasValidImageFile = false;
      }; 
      img.src = <string>fr.result;
    };
    fr.readAsDataURL(event.target.files[0]);
  }
}