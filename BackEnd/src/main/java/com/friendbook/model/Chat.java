package com.friendbook.model;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "Chats")
public class Chat
{
    @Id
    private String id;

    @Field
    @Indexed
    private String fromUserID;

    @Field
    @Indexed
    private String toUserID;

    @Field
    private Date timeStamp;

    @Field
    private String text;

    public String getId() {
        return id;
    }

    public String getFromUserID() {
        return fromUserID;
    }

    public void setFromUserID(String fromUserID) {
        this.fromUserID = fromUserID;
    }

    public String getToUserID() {
        return toUserID;
    }

    public void setToUserID(String toUserID) {
        this.toUserID = toUserID;
    }

    public Date getTimeStamp() {
        return timeStamp;
    }

    public void setTimeStamp(Date timeStamp) {
        this.timeStamp = timeStamp;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Chat(String fromUserID, String toUserID, Date timeStamp, String text)
    {
        super();
        this.fromUserID = fromUserID;
        this.toUserID = toUserID;
        this.timeStamp = timeStamp;
        this.text = text;
    }

    @Override
    public String toString()
    {
        return "Chat [fromUserID=" + fromUserID + ", toUserID=" + toUserID + ", timeStamp=" + timeStamp + ", text="
                + text + "]";
    }
}