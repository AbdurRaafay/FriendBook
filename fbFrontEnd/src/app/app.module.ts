import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TimeAgoPipe } from 'time-ago-pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsfeedComponent } from './components/newsfeed/newsfeed.component';
import { NewpostComponent } from './components/newpost/newpost.component';
import { NPostDirective } from './components/newpost/newpost.directive';
import { LoginComponent } from './components/login/login.component';
import { WallComponent } from './components/wall/wall.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsfeedComponent,
    NewpostComponent,
    NPostDirective,
    LoginComponent,
    WallComponent,
    NavbarComponent,
    TimeAgoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ NewpostComponent ]
})
export class AppModule { }
