package com.friendbook.repository.redisrepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class ChatRoomRepositoryImpl implements ChatRoomRepository
{
    private static final String KEY = "CHAT_ROOMS";

    @Autowired
    public StringRedisTemplate strRedisTemplate;

    @Override
    public String createChatRoom(String usrAID, String usrBID)
    {
        if (doesChatRoomExist(usrAID, usrBID))
        {
            System.out.println("***************************************************Option A");
            return usrAID + "+" + usrBID;
        }

        if (doesChatRoomExist(usrBID, usrAID ))
        {
            System.out.println("***************************************************Option B");
            return usrBID + "+" + usrAID;
        }
        strRedisTemplate.opsForHash().put(KEY, usrAID + "+" + usrBID + "_CHAT_ROOM", "chatroom");
        System.out.println("***************************************************Option C");
        return usrAID + "+" + usrBID;
    }

    private boolean doesChatRoomExist(String usrAID, String usrBID)
    {
        String tmp = (String) strRedisTemplate.opsForHash().get(KEY, usrAID + "+" + usrBID + "_CHAT_ROOM");

        if ( tmp != null && tmp.equals("chatroom"))
        {
            return true;
        }
        else
        {
            System.out.println("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ String is null");
            return false;
        }

    }
}