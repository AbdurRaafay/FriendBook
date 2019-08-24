package com.friendbook.repository.redisrepo;

public interface ChatRepository
{
    String createChatRoom(String usrAID, String usrBID);
}
