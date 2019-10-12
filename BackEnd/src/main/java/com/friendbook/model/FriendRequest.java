package com.friendbook.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "FriendRequest")
public class FriendRequest
{
    public enum FriendRequestStatus
    {
        PENDING, ACCEPTED, DECLINED
    }

    @Id
    private String id;

    @Field
    private String toUserID;

    @Field
    private String fromUserID;

    @Field
    private FriendRequestStatus frStatus;

    public String getToUserID()
    {
        return toUserID;
    }

    public String getFromUserID()
    {
        return fromUserID;
    }

    public FriendRequestStatus getFrStatus()
    {
        return frStatus;
    }

    public FriendRequest(String toUserID, String fromUserID, FriendRequestStatus frStatus)
    {
        this.toUserID = toUserID;
        this.fromUserID = fromUserID;
        this.frStatus = frStatus;
    }

    @Override
    public String toString()
    {
        return "FriendRequest{" + "id='" + id + '\'' + ", toUserID='" + toUserID + '\'' + ", fromUserID='" + fromUserID + '\'' +
                ", frStatus=" + frStatus + '}';
    }
}
