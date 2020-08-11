import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NPostDirective } from '../newpost/newpost.directive';
import { CommunicationService } from 'src/app/services/communication.service';
import { NewpostComponent } from '../newpost/newpost.component';

@Component({
  selector: 'app-singlepost',
  templateUrl: './singlepost.component.html',
  styleUrls: ['./singlepost.component.css']
})
export class SinglepostComponent implements OnInit 
{
  @ViewChild(NPostDirective, {static: true}) npHost: NPostDirective;
  singlePostviewContainerRef:any;
  singlePostcomponentFactory: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private commService: CommunicationService, private route: ActivatedRoute) 
  {
    this.singlePostcomponentFactory = this.componentFactoryResolver.resolveComponentFactory(NewpostComponent);
  }

  ngOnInit()
  {
    this.singlePostviewContainerRef = this.npHost.viewContainerRef;
    this.commService.getSinglePost(this.route.snapshot.paramMap.get('postID'), this.route.snapshot.paramMap.get('notUserID')).subscribe(res => 
      {
        const componentRef = this.singlePostviewContainerRef.createComponent(this.singlePostcomponentFactory);
        (<NewpostComponent>componentRef.instance).fullName = res['fullName'] as string;
        (<NewpostComponent>componentRef.instance).text = res['text'] as string;
        (<NewpostComponent>componentRef.instance).likes = res['likes'] as number;
        (<NewpostComponent>componentRef.instance).dislikes = res['dislikes'] as number;
        (<NewpostComponent>componentRef.instance).numComments = res['numComments'] as number;
        (<NewpostComponent>componentRef.instance).imagePath = res['imagePath'] as string;
        (<NewpostComponent>componentRef.instance).timestamp = res['timestamp'] as string;
        (<NewpostComponent>componentRef.instance).feedID = res['feedID'] as string;
        (<NewpostComponent>componentRef.instance).locklikedislikes = res['locklikesdislikes'] === 'true' ? true : false;
      }, 
      error => { console.log(error); });
  }
}
