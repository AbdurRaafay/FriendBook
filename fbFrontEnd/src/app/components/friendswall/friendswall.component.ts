import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { CommunicationService } from '../../services/communication.service';
import { ActivatedRoute } from '@angular/router';

import { NPostDirective } from 'src/app/components/newpost/newpost.directive';
import { NewpostComponent } from 'src/app/components/newpost/newpost.component';

@Component({
  selector: 'app-friendswall',
  templateUrl: './friendswall.component.html',
  styleUrls: ['./friendswall.component.css']
})
export class FriendswallComponent implements OnInit 
{
  @ViewChild(NPostDirective, {static: true}) npHost: NPostDirective;
  componentFactory: any;
  viewContainerRef: any;
  showPosts: boolean = false;
  constructor(private commService: CommunicationService, private route: ActivatedRoute, private componentFactoryResolver: ComponentFactoryResolver)
  {
    this.componentFactory = this.componentFactoryResolver.resolveComponentFactory(NewpostComponent);
  }

  ngOnInit() 
  {
    let imagePath: string = this.route.snapshot.paramMap.get('friendImageID');
    let fullname: string = localStorage.getItem(imagePath);
    this.commService.getFriendsWallPosts(imagePath).subscribe(res=>
    {
      this.showPosts = true; 
      this.viewContainerRef = this.npHost.viewContainerRef;    
      let limit = res.length;
      console.log(limit);
      for(let i = 0; i < limit; i++)
      {
        var abc = res[i];
        const componentRef = this.viewContainerRef.createComponent(this.componentFactory);
        (<NewpostComponent>componentRef.instance).fullName = fullname;
        (<NewpostComponent>componentRef.instance).text = abc.posttext;
        (<NewpostComponent>componentRef.instance).likes = abc.likes;
        (<NewpostComponent>componentRef.instance).dislikes = abc.dislikes;
        (<NewpostComponent>componentRef.instance).numComments = abc.numComments;
        (<NewpostComponent>componentRef.instance).imagePath = imagePath;
        (<NewpostComponent>componentRef.instance).timestamp = abc.posttime;
        (<NewpostComponent>componentRef.instance).feedID = abc.id;        
      }
    },
    error => { console.log(error); });
  }
}
