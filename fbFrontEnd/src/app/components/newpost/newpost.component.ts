import { Component, Input } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';
import { Comment } from 'src/app/models/comments';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})

export class NewpostComponent
{
  @Input() feedID: string;
  @Input() fullName: string;
  @Input() text: string;
  @Input() imagePath: string;
  @Input() timestamp: string;
  @Input() likes: number;
  @Input() dislikes: number;
  @Input() numComments: number;
  @Input() locklikedislikes: boolean;
  
  showComments: boolean = false;
  comments: Array<Comment> = [];

  constructor(private commService: CommunicationService) {}

  onAddLikes()
  {
    /*
      This test, this.feedID.length > 5, is done to ensure this component can be used unchanged inside both newsfeed and wall components. When created inside 
      wall component, a NewpostComponent component will have an empty feedID field. feedID will only be given a valid value only after 
      it is saved in the backend.
    */
    if(this.feedID.length > 5)
    {
      if (this.locklikedislikes == false)
      {
        this.commService.addLikes(this.feedID).subscribe(res => {
          this.locklikedislikes = true;
          this.likes++;
        }, 
        error => { console.log(error); });
      }        
    }
  }

  onAddDislikes()
  {
    if(this.feedID.length > 5)
    {
      if (this.locklikedislikes == false)
      {
        this.commService.addDislikes(this.feedID).subscribe(res => {
          this.locklikedislikes = true;
          this.dislikes++;
        }, 
        error => { console.log(error); });  
      }
    }
  }

  onGetComments()
  {
    if(this.feedID.length > 5)
    {
      if(this.showComments == false)
      {
        this.commService.getPostComments(this.feedID).subscribe(res => {
          this.comments = res as Comment[];
          this.showComments = true;
        }, 
        error => { console.log(error); });  
      }  
    }
  }

  onEnterComment(commentbox: string)
  {
    if(this.feedID.length > 5)
    {
      this.commService.addComment(this.feedID, commentbox).subscribe(res => 
        {
          console.log(res);
          if (this.showComments == false)
          {
            this.onGetComments();
          }
          else
          {
            let cmt = new Comment;
            cmt.fullName = localStorage.getItem('currentUserName');
            cmt.text = commentbox;
            cmt.timestamp = new Date();
            cmt.imagePath = localStorage.getItem('userImageID');
            this.comments.unshift(cmt);
          }          
        }, 
        error => { console.log(error); });        
    }
  }    
}