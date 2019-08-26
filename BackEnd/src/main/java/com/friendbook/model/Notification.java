package com.friendbook.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.Date;

@Document(collection = "Notifications")
public class Notification
{
    public enum NotificationType
    {
        COMMENT, LIKE, DISLIKE, NEWPOST, CHAT
    }

    @Id
    private String id;

    @Indexed
    @Field
    private String authorID;

    @Field
    private Date posttime;

    @Field
    private String entityID;

    @Field
    private NotificationType ntype;

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

    public NotificationType getNtype() {
        return ntype;
    }

    public void setNtype(NotificationType ntype) {
        this.ntype = ntype;
    }

    public String getEntityID() {
        return entityID;
    }

    public void setEntityID(String entityID) {
        this.entityID = entityID;
    }

    public Notification(String authorID, Date posttime, String entityID, NotificationType ntype)
    {
        this.authorID = authorID;
        this.posttime = posttime;
        this.entityID = entityID;
        this.ntype = ntype;
    }

    @Override
    public String toString()
    {
        return "Notification{" +
                "id='" + id + '\'' +
                ", authorID='" + authorID + '\'' +
                ", posttime=" + posttime +
                ", entityID='" + entityID + '\'' +
                ", ntype=" + ntype +
                '}';
    }
}
