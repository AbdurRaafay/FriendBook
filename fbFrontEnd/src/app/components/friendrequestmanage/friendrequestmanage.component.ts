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
  acceptfriendrequestbutton: boolean = true;
  rejectfriendrequestbutton: boolean = true;
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

  onAcceptFriendRequestClick()
  {
    this.commService.managefriendrequest(this.profileImageID, 'yes').subscribe(res=>{console.log(res)},
    error => { console.log(error); });
  }

  onRejectFriendRequestClick()
  {
    this.commService.managefriendrequest(this.profileImageID, 'no').subscribe(res=>{console.log(res)},
    error => { console.log(error); });
  }
}
