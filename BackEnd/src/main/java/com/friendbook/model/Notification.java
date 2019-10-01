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
        COMMENT, LIKE, DISLIKE, NEWPOST, CHAT, FRIENDREQUEST
    }

    @Id
    private String id;

    @Indexed
    @Field
    private String authorID;

    @Field
    private Date nottime;

    @Field
    private String entityID;

    @Field
    private NotificationType ntype;

    @Field
    private boolean isProcessed = false;

    public String getId() {
        return id;
    }

    public String getAuthorID() {
        return authorID;
    }

    public void setAuthorID(String authorID) {
        this.authorID = authorID;
    }

    public Date getPosttime() {
        return nottime;
    }

    public void setPosttime(Date posttime) {
        this.nottime = posttime;
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

    public boolean isProcessed() {
        return isProcessed;
    }

    public void setProcessed(boolean processed) {
        isProcessed = processed;
    }

    public Notification(String authorID, Date nottime, String entityID, NotificationType ntype) {
        this.authorID = authorID;
        this.nottime = nottime;
        this.entityID = entityID;
        this.ntype = ntype;
    }

    @Override
    public String toString() {
        return "Notification{" +
                "id='" + id + '\'' +
                ", authorID='" + authorID + '\'' +
                ", nottime=" + nottime +
                ", entityID='" + entityID + '\'' +
                ", ntype=" + ntype +
                ", isProcessed=" + isProcessed +
                '}';
    }
}
