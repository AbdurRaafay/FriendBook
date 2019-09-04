import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { MatToolbarModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
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
import { ChatcontainerComponent } from './components/chatcontainer/chatcontainer.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

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
    ChatcontainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgChatModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ NewpostComponent ]
})
export class AppModule { }
