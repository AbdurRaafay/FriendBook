package com.friendbook.repository.mongorepo;

import com.friendbook.model.FriendRequest;

import java.util.List;

public interface FriendRequestRepository
{
    void insertFriendRequest(FriendRequest freq);
    boolean isFriendRequestPending(String userAID, String userBID);//Check if friend request is pending from UserA to UserB
    List<FriendRequest> getAllFriendRequestPending(String userID);
    void deleteFriendRequest(String userAID, String userBID);//Delete friend request from userBID to userAID
}
