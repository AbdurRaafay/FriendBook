import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { ReactiveFormsModule, FormControl, ValidationErrors, AbstractControl } from '@angular/forms'
import { FormlyModule, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';
import { NewsfeedComponent } from './components/newsfeed/newsfeed/newsfeed.component';

const appearance: MatFormFieldDefaultOptions = 
{
  appearance: 'outline'
};

export function EmailValidator(control: FormControl): ValidationErrors 
{
	return !control.value || /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(control.value) ? null : { 'email': true };
}

export function EmailValidatorMessage(err, field: FormlyFieldConfig) 
{
	return `"${field.formControl.value}" is not a valid email address`;
}

export function PasswordValidator(control: FormControl): ValidationErrors 
{
	return !control.value || /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(control.value) ? null : { 'ip': true };
}

export function PasswordValidatorMessage(err, field: FormlyFieldConfig) 
{
	return `"${field.formControl.value}" is not a valid password`;
}

export function TelephoneValidator(control: FormControl): ValidationErrors 
{
	return !control.value || /^[\+][0-9]{1,3}[0-9]{4,14}$/.test(control.value) ? null : { 'telephone': true };
}

export function TelephoneValidatorMessage(err, field: FormlyFieldConfig) 
{
	return `"${field.formControl.value}" is not a valid telephone number`;
}

export function passwordMatchValidator(control: AbstractControl) 
{
  const { password, passwordConfirm } = control.value;

  // avoid displaying the message error when values are empty
  if (!passwordConfirm || !password) {
    return null;
  }

  if (passwordConfirm === password) {
    return null;
  }

  return { passwordMatch: { message: 'Password Not Matching' } };
}

@NgModule({
  declarations: 
  [
    AppComponent,
    NewsfeedComponent
  ],
  imports: [ 
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      validationMessages: 
      [
        { name: 'password', message: PasswordValidatorMessage },
        { name: 'telephone', message: TelephoneValidatorMessage },
				{ name: 'email', message: EmailValidatorMessage },
			],
      validators: 
      [
				{ name: 'password', validation: PasswordValidator },
				{ name: 'telephone', validation: TelephoneValidator },
        { name: 'email', validation: EmailValidator },
        { name: 'passwordMatch', validation: passwordMatchValidator },
			],
    }),
    MatNativeDateModule,
    FormlyMaterialModule,
    FormlyMatDatepickerModule,
    HttpClientModule,
  ],
  providers: 
  [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: appearance
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
