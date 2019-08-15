package com.friendbook.repository.redisrepo;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.fasterxml.jackson.core.type.TypeReference;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Repository;

import com.friendbook.model.Post;
import com.friendbook.repository.mongorepo.UserRepository;
import com.friendbook.utility.RedisUtility;

@Repository
public class UserFeedRepositoryImpl implements UserFeedRepository
{
    private static final String KEY = "USER_FEED";

    @Autowired
    private UserRepository userRepository;

    @Autowired
    public StringRedisTemplate strRedisTemplate;

    @Override
    public void createUserFeedCounter(String usrID, int count, int startIndex, int stopIndex)
    {
        Map<String, Object> mapObject = new HashMap<>();
        mapObject.put("Count", count);
        mapObject.put("StartIndex", startIndex);
        mapObject.put("StopIndex", stopIndex);
        String tmp = RedisUtility.createStringFromObject(mapObject);
        if(tmp != null)
        {
            strRedisTemplate.opsForHash().put(KEY, usrID + "_OBJECT", tmp);
        }
    }

    @Override
    public void saveUserFeed(String usrID, List<Post> usrfd)
    {
        createUserFeedCounter(usrID, usrfd.size(), 0, 9);
        for(Post pst : usrfd)
        {
            String tmp = RedisUtility.createJsonFromPosts(pst);
            if(tmp != null)
            {
                String tmpappend = tmp.substring(0,tmp.length()-1) + "," + "\"fullName\":" + "\"" +
                        userRepository.getFullNameByID(pst.getAuthorID()) + "\"" + "," + "\"imgPath\":" + "\"" +
                        userRepository.getImageByID(pst.getAuthorID()) + "\"" + "}";
                strRedisTemplate.opsForList().leftPush(usrID + "_DATA", tmpappend);
            }

        }
    }

    @Override
    public List<String> getUserFeed(String usrID)
    {
        Map<String, Object> mapObject;
        String tmp = (String) strRedisTemplate.opsForHash().get(KEY, usrID + "_OBJECT");
        if(tmp != null)
        {
            mapObject = RedisUtility.createObjectFromString(tmp, new TypeReference<Map<String, Object>>(){});
            if(mapObject != null)
            {
                int Count = (int) mapObject.get("Count");
                int StartIndex = (int) mapObject.get("StartIndex");
                int StopIndex = (int) mapObject.get("StopIndex");
                if (StopIndex > Count)
                    StopIndex = Count;

                List<String> tmplist = strRedisTemplate.opsForList().range(usrID + "_DATA", StartIndex, StopIndex);
                if(tmplist != null)
                {
                    StartIndex = StopIndex + 1;
                    StopIndex += 10;
                    mapObject.put("StartIndex", StartIndex);
                    mapObject.put("StopIndex", StopIndex);

                    strRedisTemplate.opsForHash().put(KEY, usrID + "_OBJECT", RedisUtility.createStringFromObject(mapObject));
                    return tmplist;
                }
                else
                {
                    System.out.println("getUserFeed tmplist null");
                    return null;
                }
            }
            else
                return null;
        }
        else
            return null;
    }

    @Override
    public void setUserWallPostCounter(String usrID, int pageNum)
    {
        //PageNum is initialized with 0
        Map<String, Object> mapObject = new HashMap<>();
        mapObject.put("Count", pageNum);
        strRedisTemplate.opsForHash().put(KEY, usrID + "_WALLCOUNT", RedisUtility.createStringFromObject(mapObject));
    }

    @Override
    public int getUserWallPostCounter(String usrID)
    {
        Map<String, Object> mapObject;
        String tmp = (String) strRedisTemplate.opsForHash().get(KEY, usrID + "_WALLCOUNT");
        mapObject = RedisUtility.createObjectFromString(tmp, new TypeReference<Map<String, Object>>(){});

        int pageNum = (int) mapObject.get("Count");
        return pageNum;
    }
}