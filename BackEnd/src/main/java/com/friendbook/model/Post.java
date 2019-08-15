package com.friendbook.model;

import java.util.Date;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "Posts")
public class Post
{
    @Id
    private String id;

    @Indexed
    @Field
    private String authorID;

    @Field
    private Date posttime;

    @Field
    private String posttext;

    @Field
    private long likes = 0;

    @Field
    private long dislikes = 0;

    @Field
    private long numComments = 0;

    @Field
    Set<String> userLikeIDs;

    @Field
    Set<String> userDislikeIDs;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    @JsonIgnore
    public String getAuthorID() {
        return authorID;
    }

    public void setAuthorID(String authorID) {
        this.authorID = authorID;
    }

    public Date getPosttime() {
        return posttime;
    }

    public void setPosttime(Date posttime) {
        this.posttime = posttime;
    }

    public String getPosttext() {
        return posttext;
    }

    public void setPosttext(String posttext) {
        this.posttext = posttext;
    }

    public long getLikes() {
        return likes;
    }

    public void setLikes(long likes) {
        this.likes = likes;
    }

    public long getDislikes() {
        return dislikes;
    }

    public void setDislikes(long dislikes) {
        this.dislikes = dislikes;
    }

    public long getNumComments() {
        return numComments;
    }

    public void setNumComments(long numComments) {
        this.numComments = numComments;
    }

    public void insertLikeUserID(String usrID)
    {
        this.userLikeIDs.add(usrID);
    }

    public void insertDislikeUserID(String usrID)
    {
        this.userDislikeIDs.add(usrID);
    }

    public boolean hasUserLikedPost(String usrID)
    {
        return  this.userLikeIDs.contains(usrID);
    }

    public boolean hasUserDislikedPost(String usrID)
    {
        return  this.userDislikeIDs.contains(usrID);
    }

    public Post(String authorID, Date posttime, String posttext, long likes, long dislikes, long numComments)
    {
        super();
        this.authorID = authorID;
        this.posttime = posttime;
        this.posttext = posttext;
        this.likes = likes;
        this.dislikes = dislikes;
        this.numComments = numComments;
    }

    @Override
    public String toString()
    {
        return "Post [id=" + id + ", authorID=" + authorID + ", posttime=" + posttime + ", posttext=" + posttext
                + ", likes=" + likes + ", dislikes=" + dislikes + ", numComments=" + numComments + "]";
    }

}