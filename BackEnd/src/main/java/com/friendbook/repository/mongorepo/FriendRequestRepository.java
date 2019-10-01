package com.friendbook.repository.mongorepo;

import com.friendbook.model.FriendRequest;

public interface FriendRequestRepository
{
    void insertFriendRequest(FriendRequest freq);
    boolean isFriendRequestPending(String userAID, String userBID);
}
