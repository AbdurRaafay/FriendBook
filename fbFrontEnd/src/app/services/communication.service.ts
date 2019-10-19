import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { AppConst } from '../constants/app-const';

@Injectable({
  providedIn: 'root'
})

export class CommunicationService 
{
  constructor(private http:HttpClient) { }

  getFriendsWallPosts(friendImageID: string): Observable<any>
  {
    let url = AppConst.serverPath + 'getfriendswall/' + friendImageID;
    console.log(url);
    return this.http.get(url);  
  }

  getWallPosts(): Observable<any> 
  {
    let url = AppConst.serverPath + 'getwallposts/';
    return this.http.get(url);  
  }

  getSinglePost(postID: string): Observable<any> 
  {
    let url = AppConst.serverPath + 'getsinglepost/' + postID;
    return this.http.get(url);  
  }

  getNewsFeed(): Observable<any> 
  {
    let url = AppConst.serverPath + 'getnewsfeed/';
    return this.http.get(url);  
  }

  getPostComments(postID: string)
  {
    let url = AppConst.serverPath + 'getcomments/' + postID + '/';
    return this.http.get(url);
  }

  getFriendsList()
  {
    let url = AppConst.serverPath + 'getfriendslist/';
    return this.http.get(url);
  }

  getChatHistory(userImageID: string): Observable<any>
  {
    let url = AppConst.serverPath + 'getchathistory/?userImageID=' + userImageID;
    return this.http.get(url);
  }

  addComment(postID: string, text: string)
  {
    let url = AppConst.serverPath + 'addcomment/' + postID + '/' + text + '/';
    return this.http.get(url);
  }

  addLikes(postID: string)
  {
    let url = AppConst.serverPath + 'addlikes/' + postID + '/';
    return this.http.get(url);
  }

  addDislikes(postID: string)
  {
    let url = AppConst.serverPath + 'adddislikes/' + postID + '/';
    return this.http.get(url);
  }

  addWallPost(text: string)
  {
    let url = AppConst.serverPath + 'addwallpost/' + text + '/';
    return this.http.get(url);
  }

  sendCredential(email: string, password: string)
  {
  	let url = AppConst.serverPath + '/login';
  	let encodedCredentials = btoa(email+":"+password);
		let basicHeader = "Basic "+encodedCredentials;
  	let headers = new HttpHeaders({
  		'Content-Type' : 'application/x-www-form-urlencoded',
  		'Authorization' : basicHeader
  	});
  	return this.http.get(url, {headers});
  }

  checkFriendRequestStatus(usrImageID: string): Observable<any>
  {
    let url = AppConst.serverPath + 'checkfriendrequeststatus/?userImageID=' + usrImageID;
    console.log(url);
    return this.http.get(url);
  }

  sendFriendRequest(usrImageID: string): Observable<any>
  {
    let url = AppConst.serverPath + 'sendfriendrequest/?userImageID=' + usrImageID;
    console.log(url);
    return this.http.get(url);
  }

  managefriendrequest(usrImageID: string, friendrequeststatus: string): Observable<any>
  {
    let url = AppConst.serverPath + 'sendfriendrequest/?userImageID=' + usrImageID + '&frndrqststs=' + friendrequeststatus;
    console.log(url);
    return this.http.get(url);
  }

  logout(): Observable<any>
  {
    let url = AppConst.serverPath + 'logout/';
    return this.http.get(url);    
  }

  checksession(): Observable<any>
  {
    let url = AppConst.serverPath + 'checkSession';
    return this.http.get(url);    
  }
}