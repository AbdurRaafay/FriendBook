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
    if (this.locklikedislikes === false)
    {
      this.commService.addLikes(this.feedID).subscribe(res => {
        this.locklikedislikes = true;
        this.likes++;
      }, 
      error => { console.log(error); });
    }        
  }

  onAddDislikes()
  {
    if (this.locklikedislikes === false)
    {
      this.commService.addDislikes(this.feedID).subscribe(res => {
        this.locklikedislikes = true;
        this.dislikes++;
      }, 
      error => { console.log(error); });  
    }
  }

  onGetComments()
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

  onEnterComment(commentbox: string)
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