import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouteReuseStrategy } from '@angular/router';
import { NewsfeedComponent } from './components/newsfeed/newsfeed.component';
import { WallComponent } from './components/wall/wall.component';
import { LoginComponent } from './components/login/login.component';
import { CustomReuseStrategy } from './route-reuse';
import { SinglepostComponent } from './components/singlepost/singlepost.component';
import { FriendrequestComponent } from './components/friendrequest/friendrequest.component';
import { FriendswallComponent } from './components/friendswall/friendswall.component';
import { FriendrequestmanageComponent } from './components/friendrequestmanage/friendrequestmanage.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = 
[
  { path: 'newsfeed', component: NewsfeedComponent },
  { path: 'wall', component: WallComponent },
  { path: 'index', component: LoginComponent },
  { path: 'singlepost/:postID/:notUserID', component: SinglepostComponent },
  { path: 'friendrequest/:friendImageID/:userFullName', component: FriendrequestComponent },
  { path: 'friendrequestmanage/:friendImageID/:userFullName', component: FriendrequestmanageComponent },
  { path: 'friendswall/:friendImageID', component: FriendswallComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled',})],
  exports: [RouterModule],
  providers: [{ provide: RouteReuseStrategy, useClass: CustomReuseStrategy }]
})
export class AppRoutingModule { }
