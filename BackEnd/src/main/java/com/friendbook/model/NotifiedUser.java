package com.friendbook.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "NotifiedUsers")
public class NotifiedUser
{
    @Id
    private String id;

    @Indexed
    @Field
    private String notifiedUserID;

    @Field
    private String notificationID;

    @Field
    private boolean isSeen = false;

    public String getNotifiedUserID() {
        return notifiedUserID;
    }

    public void setNotifiedUserID(String notifiedUserID) {
        this.notifiedUserID = notifiedUserID;
    }

    public String getNotificationID() {
        return notificationID;
    }

    public void setNotificationID(String notificationID) {
        this.notificationID = notificationID;
    }

    public boolean isSeen() {
        return isSeen;
    }

    public void setSeen(boolean seen) {
        isSeen = seen;
    }

    public String getId() {
        return id;
    }

    public NotifiedUser(String notifiedUserID, String notificationID, boolean isSeen) {
        this.notifiedUserID = notifiedUserID;
        this.notificationID = notificationID;
        this.isSeen = isSeen;
    }

    @Override
    public String toString() {
        return "NotifiedUser{" +
                "id='" + id + '\'' +
                ", notifiedUserID='" + notifiedUserID + '\'' +
                ", notificationID='" + notificationID + '\'' +
                ", isSeen=" + isSeen +
                '}';
    }
}
