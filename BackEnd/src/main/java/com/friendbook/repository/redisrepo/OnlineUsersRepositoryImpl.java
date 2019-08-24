package com.friendbook.repository.redisrepo;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.HashMap;
import java.util.Map;

import com.fasterxml.jackson.core.type.TypeReference;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Repository;

import com.friendbook.model.User;
import com.friendbook.utility.RedisUtility;

@Repository
public class OnlineUsersRepositoryImpl implements OnlineUsersRepository
{
    private static final String KEY = "USER_STATUS";

    @Autowired
    public StringRedisTemplate strRedisTemplate;

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
            System.out.println("Online " + usr.getEmail() + " " + usr.getId());
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
                    return null;
            }
            catch (Exception e)
            {
                e.printStackTrace();
                return null;
            }
        }
        else
        {
            return null;
        }
        return null;
    }
}