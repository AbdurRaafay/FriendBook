import { Component } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  showLogin: boolean = false;
  showRegister: boolean = true;

  loginForm = new FormGroup({});
  loginModel = {};
  loginFields: FormlyFieldConfig[] = 
  [
    {
      key: 'email',
      type: 'input',
      templateOptions: 
      {
        type: 'email',
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
      key: 'firstName', type: 'input', templateOptions: { label: 'First Name', required: true, },
    },
    {
      key: 'lastName', type: 'input', templateOptions: { label: 'Last Name', required: true, },
    },
    {
      key: 'email', type: 'input', templateOptions: { label: 'Email', placeholder: 'Email', required: true, },
      validators: { validation: ['email'], },
    },
    { 
      validators: { validation: [ { name: 'passwordMatch', options: { errorPath: 'passwordConfirm' } }, ], },
      fieldGroup: [
        {
          key: 'password',
          type: 'input',
          templateOptions: {
            type: 'password',
            label: 'Password',
            placeholder: 'Must be at least 3 characters',
            required: true,
            minLength: 3,
          },
        },
        {
          key: 'passwordConfirm',
          type: 'input',
          templateOptions: {
            type: 'password',
            label: 'Confirm Password',
            placeholder: 'Please re-enter your password',
            required: true,
          },
        },
      ],
    },
    {
      key: 'telephone', type: 'input', templateOptions: { label: 'Telephone', placeholder: 'Telephone', required: true, },
      validators: { validation: ['telephone'] },
    },
    {
      key: 'genderSelect', type: 'select',
      templateOptions: 
      {
        label: 'Gender', placeholder: 'Placeholder', required: true, options: [ { value: 1, label: 'Male'  }, { value: 2, label: 'Female'  }, { value: 3, label: 'Other' } ],
      },
    },
    { 
      key: 'Datepicker', type: 'datepicker', templateOptions: { label: 'Date of birth', placeholder: 'Date of birth', required: true, },
    },
  ];

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
      console.log(this.registerModel);
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
}