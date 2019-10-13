import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-friendrequest',
  templateUrl: './friendrequest.component.html',
  styleUrls: ['./friendrequest.component.css']
})
export class FriendrequestComponent implements OnInit 
{
  sendfriendrequest : boolean = true;
  profileImageID : string;
  fullname : string;
  userNameArray: string[];

  constructor(private commService: CommunicationService, private route: ActivatedRoute) { }

  ngOnInit() 
  {
    this.profileImageID = this.route.snapshot.paramMap.get('friendImageID');
    this.fullname = this.route.snapshot.paramMap.get('userFullName');
    this.userNameArray = this.fullname.split(" ");
    this.commService.checkFriendRequestStatus(this.profileImageID).subscribe(res =>
      {
        console.log(res);
        if(res.status === 'pending')
        {
          this.sendfriendrequest = false;         
        }
      },
    error => { console.log(error); });
  }

  onSendFriendRequestClick()
  {
    this.commService.sendFriendRequest(this.profileImageID).subscribe(res => 
      { 
        console.log(res);
        if(res.status === 'sent')
        {
          this.sendfriendrequest = false;         
        }
      },
      error => { console.log(error); });
  }
}
