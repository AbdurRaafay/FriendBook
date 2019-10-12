import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-friendrequest',
  templateUrl: './friendrequest.component.html',
  styleUrls: ['./friendrequest.component.css']
})
export class FriendrequestComponent implements OnInit 
{

  sendfriendrequest:boolean = true;
  profileImageID:string;

  constructor(private commService: CommunicationService) { }

  ngOnInit() 
  {


  }

  onSendFriendRequestClick()
  {
    
  }
}
