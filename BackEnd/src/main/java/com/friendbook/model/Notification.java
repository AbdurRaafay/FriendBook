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
    private Date nottime;

    @Field
    private String entityID;

    @Field
    private NotificationType ntype;

    @Field
    private boolean isprocessed = false;

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

    public boolean isIsprocessed() {
        return isprocessed;
    }

    public void setIsprocessed(boolean isprocessed) {
        this.isprocessed = isprocessed;
    }

    public Notification(String authorID, Date posttime, String entityID, NotificationType ntype, boolean isprocessed)
    {
        this.authorID = authorID;
        this.nottime = posttime;
        this.entityID = entityID;
        this.ntype = ntype;
        this.isprocessed = isprocessed;
    }

    @Override
    public String toString()
    {
        return "Notification{" + "id='" + id + '\'' + ", authorID='" + authorID + '\'' + ", posttime=" + nottime +
                ", entityID='" + entityID + '\'' + ", ntype=" + ntype + ", isprocessed=" + isprocessed + '}';
    }
}
