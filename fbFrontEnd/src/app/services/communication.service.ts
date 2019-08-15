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

  getWallPosts(): Observable<any> 
  {
    let url = AppConst.serverPath + 'getwallposts/';
    return this.http.get(url);  
  }

  getPosts(): Observable<any> 
  {
    let url = AppConst.serverPath + 'getposts/';
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

  getChatHistory(userAID: string, userBID: string)
  {
    let url = AppConst.serverPath + 'getchathistory/' + userAID + '/' + userBID + '/';
    return this.http.get(url);
  }

  addComment(userID: string, postID: string, text: string)
  {
    let url = AppConst.serverPath + 'addcomment/' + userID + '/' + postID + '/' + text + '/';
    return this.http.get(url);
  }

  addLikes(userID: string, postID: string)
  {
    let url = AppConst.serverPath + 'addlikes/' + userID + '/' + postID + '/';
    return this.http.get(url);
  }

  addDislikes(userID: string, postID: string)
  {
    let url = AppConst.serverPath + 'adddislikes/' + userID + '/' + postID + '/';
    return this.http.get(url);
  }

  addWallPost(userID: string, text: string)
  {
    let url = AppConst.serverPath + 'addwallpost/' + userID + '/' + text + '/';
    return this.http.get(url);
  }

  sendCredential(email: string, password: string)
  {
  	let url = AppConst.serverPath+'/login';
  	let encodedCredentials = btoa(email+":"+password);
		let basicHeader = "Basic "+encodedCredentials;
  	let headers = new HttpHeaders({
  		'Content-Type' : 'application/x-www-form-urlencoded',
  		'Authorization' : basicHeader
  	});
  	return this.http.get(url, {headers});
  }
}