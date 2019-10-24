package com.friendbook.repository.mongorepo;

import com.friendbook.model.Chat;

import java.util.List;

public interface ChatRepository
{
    List<Chat> findChats(String fromUserID, String toUserID);//fromUserID and toUserID are imageIDs
    void insertChat(Chat cht);
}
