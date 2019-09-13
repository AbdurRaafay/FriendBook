package com.friendbook.model;

import java.util.Date;

public class ChatMessage
{
    private String content;
    private String sender;
    private String recipient;
    private Date timeStamp;

    public String getRecipient()
    {
        return recipient;
    }

    public void setRecipient(String recipient) { this.recipient = recipient; }

    public String getContent()
    {
        return content;
    }

    public void setContent(String content)
    {
        this.content = content;
    }

    public String getSender()
    {
        return sender;
    }

    public void setSender(String sender)
    {
        this.sender = sender;
    }

    public Date getTimeStamp() { return timeStamp; }

    public void setTimeStamp(Date timeStamp) { this.timeStamp = timeStamp; }
}