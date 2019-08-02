package com.friendbook.model;

import java.util.Date;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "Comments")
public class Comment
{
    @Id
    private String id;

    @Indexed
    @Field
    private String parentpostID;

    @Indexed
    @Field
    private String authorID;

    @Field
    private Date posttime;

    @Field
    private String posttext;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

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

    public String getParentpostID() {
        return parentpostID;
    }

    public void setParentpostID(String parentpostID) {
        this.parentpostID = parentpostID;
    }

    public Comment(String parentpostID, String authorID, Date posttime, String posttext)
    {
        super();
        this.parentpostID = parentpostID;
        this.authorID = authorID;
        this.posttime = posttime;
        this.posttext = posttext;
    }

    @Override
    public String toString()
    {
        return "Comment [id=" + id + ", parentpostID=" + parentpostID + ", authorID=" + authorID + ", posttime="
                + posttime + ", posttext=" + posttext + "]";
    }

}