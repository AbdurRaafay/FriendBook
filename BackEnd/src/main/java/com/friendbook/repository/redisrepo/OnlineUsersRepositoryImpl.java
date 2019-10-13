package com.friendbook.repository.redisrepo;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;

import com.fasterxml.jackson.core.type.TypeReference;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Repository;

import com.friendbook.model.User;
import com.friendbook.utility.RedisUtility;

@Repository
public class OnlineUsersRepositoryImpl implements OnlineUsersRepository
{
    private static final String KEY = "USER_STATUS";

    private static final String KEY_NAMES = "USER_NAMES";

    @Autowired
    private StringRedisTemplate strRedisTemplate;

    @Autowired
    private SimpMessageSendingOperations messagingTemplate;

    @Override
    public void putUser(User usr)
    {
        LocalDateTime date = LocalDateTime.now();
        Map<String, Object> mapObject = new HashMap<String, Object>();
        mapObject.put("Name", usr.getEmail());
        mapObject.put("LoginTime", date.format(DateTimeFormatter.ISO_DATE_TIME));
        mapObject.put("LogoutTime", "");
        mapObject.put("isOnline", "yes");
        String tmp = RedisUtility.createStringFromObject(mapObject);
        if(tmp != null)
        {
            strRedisTemplate.opsForHash().put(KEY, usr.getId() + "_ONLINE_STATUS", tmp);
            if(usr.getFriendCount() > 0)
                sendOnlineStatusNotification(usr, "online");
            System.out.println("Online " + usr.getEmail() + " " + usr.getId());
            System.out.println(getOnlineUsersList());
        }
    }

    @Override
    public void logoutUser(String userID)
    {
        String tmp = (String) strRedisTemplate.opsForHash().get(KEY, userID + "_ONLINE_STATUS");
        Map<String, Object> mapObject = RedisUtility.createObjectFromString(tmp, new TypeReference<Map<String, Object>>(){});
        mapObject.put("isOnline", "no");
        LocalDateTime date = LocalDateTime.now();
        mapObject.put("LogoutTime", date.format(DateTimeFormatter.ISO_DATE_TIME));
        mapObject.put("LoginTime", "");
        strRedisTemplate.opsForHash().put(KEY, userID + "_ONLINE_STATUS", RedisUtility.createStringFromObject(mapObject));
    }

    /*
    * Check if user with userID is online and return user login name if user is online
    * */
    @Override
    public String isUserOnline(String userID)
    {
        String tmp = (String) strRedisTemplate.opsForHash().get(KEY, userID + "_ONLINE_STATUS");
        if ( tmp != null )
        {
            try
            {
                Map<String, Object> mapObject = RedisUtility.createObjectFromString(tmp, new TypeReference<Map<String, Object>>(){});
                String status = (String) mapObject.get("isOnline");
                if(status.equals("yes"))
                {
                    return (String) mapObject.get("Name");
                }
                else if (status.equals("no"))
                    return "offline";
            }
            catch (Exception e)
            {
                e.printStackTrace();
                return "offline";
            }
        }
        else
        {
            return "offline";
        }
        return "offline";
    }

    @Override
    public List<Map<String, String>> getOnlineUsersList()
    {
        List<Map<String, String>> frndLst = new ArrayList<>();
        Map<Object, Object> map = strRedisTemplate.opsForHash().entries("USER_STATUS");
        map.forEach((k,v) ->
        {
            String key = (String)k;
            String value = (String)v;
            if(value.contains("yes"))
            {
                Map<String,String> hm = new HashMap<>();
                hm.put("Info", key.substring(0,24) + "," + value.substring(83,value.length()-2) +
                        "," + value.substring(30,40) + "," + value.substring(41,49));
                frndLst.add(hm);
            }
        });
        return frndLst;
    }

    @Async
    void sendOnlineStatusNotification(User usr, String status)
    {
        Set<String> friends = usr.getUserFriends();
        friends.forEach(f->
        {
            String name = isUserOnline(f);
            if(!name.equals("offline"))
            {
                Map<String, Object> map = new HashMap<>();
                map.put("onlineStatusMessage", status);
                map.put("imagePath", usr.getImageFileID());
                messagingTemplate.convertAndSendToUser(name, "/queue/messages", map);
            }
        });
    }
}