package com.friendbook.repository.mongorepo;

import com.friendbook.model.Chat;

import java.util.List;

public interface ChatRepository
{
    List<Chat> findChats(String fromUserID, String toUserID);
    void insertChat(Chat cht);
}
