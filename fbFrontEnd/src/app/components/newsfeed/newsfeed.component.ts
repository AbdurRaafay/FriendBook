import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';

import { NPostDirective } from 'src/app/components/newpost/newpost.directive';
import { NewpostComponent } from 'src/app/components/newpost/newpost.component';
import { CommunicationService } from 'src/app/services/communication.service';
import { ScrollService } from 'src/app/services/scroll.service';

var homePostsCounter: number = 0;

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})

export class NewsfeedComponent implements OnInit 
{
  @ViewChild(NPostDirective, {static: true}) npHost: NPostDirective;
  currentUserName: string = localStorage.getItem('currentUserName');
  profileImageID: string = localStorage.getItem('userImageID');
  nomoreposts: boolean = false;
  componentFactory: any;
  viewContainerRef:any;

  constructor(private commService: CommunicationService, private componentFactoryResolver: ComponentFactoryResolver, private scrSrv: ScrollService) 
  { 
    this.componentFactory = this.componentFactoryResolver.resolveComponentFactory(NewpostComponent);
    console.log(this.currentUserName + " " + this.profileImageID);
  }

  ngOnInit() 
  {
    console.log('Newsfeed OnInit');
    this.viewContainerRef = this.npHost.viewContainerRef;
    this.getFeedPosts();
    this.scrSrv.scrollObs.subscribe(res=>
      {
        if(res.text === 'newsfeed')
        {
          this.getFeedPosts();
        }
      });
  }

  getFeedPosts() 
  {
    this.commService.getNewsFeed().subscribe(res => 
    {
      let limit = res.length;
      console.log(limit);
      for(let i = 0; i < limit; i++)
      {
        var abc = JSON.parse(res[i]);
        const componentRef = this.viewContainerRef.createComponent(this.componentFactory);
        (<NewpostComponent>componentRef.instance).fullName = abc.fullName;
        (<NewpostComponent>componentRef.instance).text = abc.posttext;
        (<NewpostComponent>componentRef.instance).likes = abc.likes;
        (<NewpostComponent>componentRef.instance).dislikes = abc.dislikes;
        (<NewpostComponent>componentRef.instance).numComments = abc.numComments;
        (<NewpostComponent>componentRef.instance).imagePath = abc.imgPath;
        (<NewpostComponent>componentRef.instance).timestamp = abc.posttime;
        (<NewpostComponent>componentRef.instance).feedID = abc.id;        
        (<NewpostComponent>componentRef.instance).locklikedislikes = abc.locklikesdislikes === 'true' ? true : false;
      }
    }, 
    error => { console.log(error); this.nomoreposts = true });
  }
}