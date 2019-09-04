import { Component, Renderer2, HostListener } from '@angular/core';
import { Router } from '@angular/router';

import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent
{
  title = 'fbFrontEnd';

  constructor(private renderer: Renderer2, private router: Router, private scrSrv: ScrollService)
  {
    this.renderer.setStyle(document.body, 'background-color', 'rgb(231, 235, 242)');
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