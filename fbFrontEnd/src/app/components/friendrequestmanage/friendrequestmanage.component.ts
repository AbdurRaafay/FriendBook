import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-friendrequestmanage',
  templateUrl: './friendrequestmanage.component.html',
  styleUrls: ['./friendrequestmanage.component.css']
})
export class FriendrequestmanageComponent implements OnInit 
{
  acceptfriendrequest: boolean = true;
  rejectfriendrequest: boolean = true;
  acceptfriendrequestmessage: boolean = false;
  rejectfriendrequestmessage: boolean = false;
  profileImageID : string;
  fullname : string;
  userNameArray: string[];
    
  constructor(private commService: CommunicationService, private route: ActivatedRoute) { }

  ngOnInit() 
  {
    this.profileImageID = this.route.snapshot.paramMap.get('friendImageID');
    this.fullname = this.route.snapshot.paramMap.get('userFullName');
    this.userNameArray = this.fullname.split(" ");
  }

  onManageFriendRequestClick(status: string)
  {
    this.commService.manageFriendRequest(this.profileImageID, status).subscribe(res=>
      {        
        console.log(res);
        if(res['status'] === 'FRIEND_REQUEST_ACCEPTED')
          this.acceptfriendrequestmessage = true;
        else if(res['status'] === 'FRIEND_REQUEST_REJECTED')
          this.rejectfriendrequestmessage = true;
      },
    error => { console.log(error); });
  }
}
