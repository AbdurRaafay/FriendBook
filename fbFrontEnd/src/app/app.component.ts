import { Component, Renderer2, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';

import { ScrollService } from 'src/app/services/scroll.service';
import { ChatControl } from './components/chatcontainer/chatcontrol';
import { AuthenticationService } from './services/authentication.service';
import { CommunicationService } from 'src/app/services/communication.service';
import { WebsocketmessagingService } from 'src/app/services/websocketmessaging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent
{
  title = 'fbFrontEnd';
  adapter: ChatControl = new ChatControl();
  isLoggedIn$: Observable<boolean>;

  constructor(private renderer: Renderer2, private router: Router, private scrSrv: ScrollService, private authService: AuthenticationService,
    private commService: CommunicationService, private wscommService: WebsocketmessagingService)
  {
    this.renderer.setStyle(document.body, 'background-color', 'rgb(231, 235, 242)');
    this.isLoggedIn$ = this.authService.isLoggedIn;
    this.isLoggedIn$.subscribe(res => 
      {
        if(res == true)
        {
          this.adapter.commService = this.commService;
          this.adapter.wsService = this.wscommService;
          this.adapter.setFriendsList();
          this.adapter.registerCallBacks();
          this.wscommService.connectToChat();
        }
      });
  }

  @HostListener('window:scroll')
  checkScroll() 
  {
    let a = document.documentElement.scrollTop;
    let b = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let c = a/b*100;
    if( c == 100 )
    {
      if(this.router.url === '/newsfeed')
        this.scrSrv.sendScrollMessage('newsfeed');
      else if(this.router.url === '/wall')
        this.scrSrv.sendScrollMessage('wall');
    }
  }
}