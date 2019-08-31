package com.friendbook.model;

import java.util.Date;

public class ChatMessage
{
    public enum MessageType
    {
        CHAT, JOIN, LEAVE
    }

    private MessageType messageType;
    private String content;
    private String sender;
    private String recipient;
    private Date timeStamp;

    public String getRecipient()
    {
        return recipient;
    }

    public void setRecipient(String recipient) { this.recipient = recipient; }

    public MessageType getType()
    {
        return messageType;
    }

    public void setType(MessageType messageType)
    {
        this.messageType = messageType;
    }

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