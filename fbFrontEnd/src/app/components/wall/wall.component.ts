import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';

import { NPostDirective } from 'src/app/components/newpost/newpost.directive';
import { NewpostComponent } from 'src/app/components/newpost/newpost.component';
import { CommunicationService } from 'src/app/services/communication.service';
import { ScrollService } from 'src/app/services/scroll.service';

var wallPostsCounter: number = 0;

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})

export class WallComponent implements OnInit 
{
  @ViewChild(NPostDirective, {static: true}) npHost: NPostDirective;
  wallnomoreposts: boolean = false;
  wallcomponentFactory: any;
  wallviewContainerRef:any;
  wallNewPostText: string;

  constructor(private commService: CommunicationService, private componentFactoryResolver: ComponentFactoryResolver, private scrSrv: ScrollService) 
  { 
    this.wallcomponentFactory = this.componentFactoryResolver.resolveComponentFactory(NewpostComponent);
  }

  ngOnInit() 
  {
    console.log('Wall OnInit');  
    this.wallviewContainerRef = this.npHost.viewContainerRef;
    this.getWallPosts();
    this.scrSrv.scrollObs.subscribe(res=>
      {
        if(res.text === 'wall')
        {
          console.log(res);
          this.getWallPosts();
        }
      });
  }

  getWallPosts()
  {
    this.commService.getWallPosts().subscribe(res => 
      {
        let limit = res.length;
        console.log(limit);
        for(let i = 0; i < limit; i++)
        {
          var abc = JSON.parse(res[i]);
          const componentRef = this.wallviewContainerRef.createComponent(this.wallcomponentFactory);
          (<NewpostComponent>componentRef.instance).fullName = abc.fullName;
          (<NewpostComponent>componentRef.instance).text = abc.posttext;
          (<NewpostComponent>componentRef.instance).likes = abc.likes;
          (<NewpostComponent>componentRef.instance).dislikes = abc.dislikes;
          (<NewpostComponent>componentRef.instance).numComments = abc.numComments;
          (<NewpostComponent>componentRef.instance).imagePath = abc.imgPath;
          (<NewpostComponent>componentRef.instance).timestamp = abc.posttime;
          (<NewpostComponent>componentRef.instance).feedID = abc.id;
          (<NewpostComponent>componentRef.instance).locklikedislikes = abc.locklikedislikes;
        }
      }, 
      error => { console.log(error); this.wallnomoreposts = true });
  }
  
  onAddNewWallPostClick()
  {
    if(this.wallNewPostText.length > 0)
    {
      this.commService.addWallPost(this.wallNewPostText).subscribe(res =>
        {
          console.log(res);
          const componentRef = this.wallviewContainerRef.createComponent(this.wallcomponentFactory, 0);
          (<NewpostComponent>componentRef.instance).fullName = localStorage.getItem('currentUserName');
          (<NewpostComponent>componentRef.instance).text = this.wallNewPostText;
          (<NewpostComponent>componentRef.instance).likes = 0;
          (<NewpostComponent>componentRef.instance).dislikes = 0;
          (<NewpostComponent>componentRef.instance).numComments = 0;
          (<NewpostComponent>componentRef.instance).imagePath = localStorage.getItem('userImageID');
          (<NewpostComponent>componentRef.instance).timestamp = (new Date()).toDateString();
          (<NewpostComponent>componentRef.instance).feedID = "";  
        });  
    }
  }  
}