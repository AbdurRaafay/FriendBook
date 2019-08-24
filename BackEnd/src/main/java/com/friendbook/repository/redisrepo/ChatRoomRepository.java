package com.friendbook.repository.redisrepo;

public interface ChatRoomRepository
{
    String createChatRoom(String usrAID, String usrBID);
}
