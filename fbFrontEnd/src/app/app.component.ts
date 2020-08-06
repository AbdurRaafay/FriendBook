import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, ValidationErrors } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { map } from 'rxjs/operators';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  showLogin: boolean = false;
  showRegister: boolean = true;
  selectFileTouched: boolean = false;
  selectedFileName: string = "";
  isValidImageFile: boolean = false;
  selectedFile: File

  loginForm = new FormGroup({});
  loginModel = {};
  loginFields: FormlyFieldConfig[] = 
  [
    {
      key: 'email',
      type: 'input',
      templateOptions: 
      {
        label: 'Email',
        placeholder: 'Email',
        minLength: 6,
        maxLength: 30,
        required: true,
      },
      validators: 
      {
        validation: ['email'],
      },
    },
    {
      key: 'password',
      type: 'input',
      templateOptions: 
      {
        type: 'password',
        label: 'Password',
        placeholder: 'Password',
        minLength: 6,
        maxLength: 30,
        required: true,
      },
      validators: { validation: ['password'] },
    }
  ];

  registerForm = new FormGroup({});
  registerModel = {};
  registerFields: FormlyFieldConfig[] = 
  [    
    {
      key: 'firstName', type: 'input', templateOptions: { label: 'First Name', maxLength: 50, },
    },
    {
      key: 'lastName', type: 'input', templateOptions: { label: 'Last Name', maxLength: 50, },
    },
    {
      key: 'email', type: 'input', templateOptions: { type: 'email', label: 'Email', placeholder: 'Email', minLength: 5, maxLength: 30, },
      asyncValidators: 
      {
        validation: 
        [
          (control: FormControl) => this.commService.checkEmailAvailability(control.value).pipe
          (
            map( res => 
              { 
                console.log(res); 
                if (res.status === 'AVAILABLE') 
                {
                  return null;
                } 
                else if (res.status === 'NOT_AVAILABLE')
                {
                  return { uniqueUsername: true };
                }
              }),
          ),
        ]
      },
    },
    { 
      validators: { validation: [ { name: 'passwordMatch', options: { errorPath: 'passwordConfirm' } }, ], },
      fieldGroup: 
      [
        {
          key: 'password', type: 'input', templateOptions: { type: 'password', label: 'Password', placeholder: 'Must be at least 3 characters', minLength: 3, },
        },
        {
          key: 'passwordConfirm', type: 'input', templateOptions: { type: 'password', label: 'Confirm Password', placeholder: 'Please re-enter your password', },
        },
      ],
    },
    {
      key: 'telephone', type: 'input', templateOptions: { label: 'Telephone', placeholder: 'Telephone', },
      validators: { validation: ['telephone'] },
    },
    {
      key: 'genderSelect', type: 'select',
      templateOptions: 
      {
        label: 'Gender', placeholder: 'Placeholder', options: [ { value: 1, label: 'Male'  }, { value: 2, label: 'Female'  }, { value: 3, label: 'Other' } ],
      },
    },
    { 
      key: 'Datepicker', type: 'datepicker', templateOptions: { label: 'Date of birth', placeholder: 'Date of birth', },
    },
  ];

  constructor(private commService: CommunicationService, private router:Router) { }

  onLoginSubmit()
  {
    if (this.loginForm.valid) 
    {
      console.log(this.loginModel);
    }
  }

  onRegisterSubmit()
  {
    if (this.registerForm.valid) 
    {
      console.log(this.registerModel );
    }
  }  

  loadPage(choice: string)
  {
    if(choice === 'register')
    {
      this.showLogin = false;
      this.showRegister = true;
    }
  }

  onFileChanged(event)
  {
    let fr = new FileReader;
    this.selectFileTouched = true;
    this.selectedFile = event.target.files[0];
    this.selectedFileName = this.selectedFile.name;
    let img = new Image();
    fr.onload = () => 
    {
      img.onload = () => 
      {
         console.log(img.width + " " + img.height);
         if(img.width == 400 && img.height == 400)
         {
           this.isValidImageFile = true;
           this.selectedFile = event.target.files[0];
           this.selectedFileName = this.selectedFile.name;
          //  this.uploadData.append('imageFile', this.selectedFile, this.selectedFile.name);
         }          
         else
         this.isValidImageFile = false;
      }; 
      img.src = <string>fr.result;
    };
    fr.readAsDataURL(event.target.files[0]);
  }
}