package com.friendbook.repository.redisrepo;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
            strRedisTemplate.opsForHash().put(KEY, usrID + "_OBJECT", tmp);
    }

    @Override
    public void saveUserFeed(String usrID, List<Post> usrfd)
    {
        createUserFeedCounter(usrID, usrfd.size(),0,9);
        List<Map<String,Object>> usrfdtmp = new ArrayList<Map<String,Object>>();
        for(int i = 0; i < usrfd.size(); i++)
        {
            Map<String, Object> map = new HashMap<>();
            map.put("feedID", usrfd.get(i).getId());
            map.put("fullName", userRepository.getFullNameByID(usrfd.get(i).getAuthorID()));
            map.put("imagePath", userRepository.getImageByID(usrfd.get(i).getAuthorID()));
            map.put("text", usrfd.get(i).getPosttext());
            map.put("timestamp", usrfd.get(i).getPosttime());
            map.put("likes", usrfd.get(i).getLikes());
            map.put("dislikes", usrfd.get(i).getDislikes());
            map.put("numComments", usrfd.get(i).getNumComments());
            map.put("locklikesdislikes", false);
            usrfdtmp.add(map);
        }
        String tmp = RedisUtility.createStringFromObjectList(usrfdtmp);
        if(tmp != null)
            strRedisTemplate.opsForList().leftPush(usrID + "_DATA", tmp);
    }

    @Override
    public List<Map<String,Object>> getUserFeed(String usrID)
    {
        List<Map<String,Object>> fpreturn = new ArrayList<Map<String, Object>>();
        Map<String, Object> mapObject;
        List<String> tmplist;

        String tmp = (String) strRedisTemplate.opsForHash().get(KEY, usrID + "_OBJECT");
        if(tmp != null)
        {
            mapObject = RedisUtility.createObjectFromString(tmp);
            if(mapObject != null)
            {
                int Count = (int) mapObject.get("Count");
                int StartIndex = (int) mapObject.get("StartIndex");
                int StopIndex = (int) mapObject.get("StopIndex");

                if(StartIndex < Count)
                {
                    if (StopIndex > Count)
                        StopIndex = Count;

                    tmplist = strRedisTemplate.opsForList().range(usrID + "_DATA", StartIndex, StopIndex);

                    StartIndex = StopIndex + 1;
                    StopIndex += 10;
                    mapObject.put("StartIndex", StartIndex);
                    mapObject.put("StopIndex", StopIndex);

                    strRedisTemplate.opsForHash().put(KEY, usrID + "_OBJECT", RedisUtility.createStringFromObject(mapObject));

                    for( int i = 0 ; i < tmplist.size() ; i++ )
                    {
                        mapObject = null;
                        mapObject = RedisUtility.createObjectFromString(tmplist.get(i));
                        fpreturn.add(mapObject);
                    }
                }

            }


        }
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
        mapObject = RedisUtility.createObjectFromString(tmp);

        int pageNum = (int) mapObject.get("Count");
        return pageNum;
    }
}