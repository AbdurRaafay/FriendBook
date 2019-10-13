import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule, MatAutocompleteModule, MatFormFieldModule, MatMenuModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatListModule } from '@angular/material/list'; 
import { MatSidenavModule } from '@angular/material/sidenav'; 
import { TimeAgoPipe } from 'time-ago-pipe';
import { NgChatModule } from 'ng-chat';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsfeedComponent } from './components/newsfeed/newsfeed.component';
import { NewpostComponent } from './components/newpost/newpost.component';
import { NPostDirective } from './components/newpost/newpost.directive';
import { LoginComponent } from './components/login/login.component';
import { WallComponent } from './components/wall/wall.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SinglepostComponent } from './components/singlepost/singlepost.component';
import { FriendswallComponent } from './components/friendswall/friendswall.component';
import { FriendrequestComponent } from './components/friendrequest/friendrequest.component';
import { FriendrequestmanageComponent } from './components/friendrequestmanage/friendrequestmanage.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsfeedComponent,
    NewpostComponent,
    NPostDirective,
    LoginComponent,
    WallComponent,
    NavbarComponent,
    TimeAgoPipe,
    SinglepostComponent,
    FriendrequestComponent,
    FriendswallComponent,
    FriendrequestmanageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule, 
    MatAutocompleteModule, 
    MatFormFieldModule,
    AppRoutingModule,
    HttpClientModule,
    NgChatModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatSidenavModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ NewpostComponent ]
})
export class AppModule { }
