import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl, FormGroupDirective, NgForm } from '@angular/forms';
import { Router, ResolveEnd } from '@angular/router';
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
  registerFailure: boolean = false;
  hasValidImageFile: boolean = true;
  selectFileTouched: boolean = false;
  passwordMatchError: boolean = false;
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
      this.uploadData.append('firstname', this.registerForm.get('firstname').value);
      this.uploadData.append('lastname', this.registerForm.get('lastname').value);
      this.uploadData.append('password', this.registerForm.get('password').value);
      this.uploadData.append('phone', this.registerForm.get('phone').value);
      this.uploadData.append('birthday', this.registerForm.get('birthday').value);
      this.uploadData.append('email', this.registerForm.get('email').value);
      this.uploadData.append('gender', this.registerForm.get('gender').value);
    }
  }

  onFileChanged(event)
  {
    let fr = new FileReader;
    let img = new Image();
    var that = this;
    fr.onload = () => 
    {
      img.onload = () => 
      {
         console.log(img.width + " " + img.height);
         if(img.width == 400 && img.height == 400)
          that.hasValidImageFile = true;
         else
          that.hasValidImageFile = false;
      }; 
      img.src = <string>fr.result;
      this.uploadData.append('imageFile', this.selectedFile, this.selectedFile.name);
    };
    fr.readAsDataURL(event.target.files[0]);
  }
}