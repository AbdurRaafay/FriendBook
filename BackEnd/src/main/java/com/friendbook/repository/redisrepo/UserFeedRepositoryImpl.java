package com.friendbook.repository.redisrepo;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Repository;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import com.friendbook.model.Post;
import com.friendbook.repository.mongorepo.UserRepository;


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
        strRedisTemplate.opsForHash().put(KEY, usrID + "_OBJECT", createStringFromObject(mapObject));
    }

    @Override
    public void saveUserFeed(String usrID, List<Post> usrfd)
    {
        createUserFeedCounter(usrID, usrfd.size(),0,9);

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
            strRedisTemplate.opsForList().leftPush(usrID + "_DATA", createStringFromObject(map));
        }
    }

    @Override
    public List<Map<String,Object>> getUserFeed(String usrID)
    {
        List<Map<String,Object>> fpreturn = new ArrayList<Map<String,Object>>();
        Map<String, Object> mapObject;
        List<String> tmplist;

        String tmp = (String) strRedisTemplate.opsForHash().get(KEY, usrID + "_OBJECT");
        mapObject = createObjectFromString(tmp);

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

            strRedisTemplate.opsForHash().put(KEY, usrID + "_OBJECT", createStringFromObject(mapObject));

            for( int i = 0 ; i < tmplist.size() ; i++ )
            {
                mapObject = null;
                mapObject = createObjectFromString(tmplist.get(i));
                fpreturn.add(mapObject);
            }
        }
        return fpreturn;
    }

    @Override
    public void setUserWallPostCounter(String usrID, int pageNum)
    {
        //PageNum is initialized with 0
        Map<String, Object> mapObject = new HashMap<>();
        mapObject.put("Count", pageNum);
        strRedisTemplate.opsForHash().put(KEY, usrID + "_WALLCOUNT", createStringFromObject(mapObject));
    }

    @Override
    public int getUserWallPostCounter(String usrID)
    {
        Map<String, Object> mapObject;
        String tmp = (String) strRedisTemplate.opsForHash().get(KEY, usrID + "_WALLCOUNT");
        mapObject = createObjectFromString(tmp);

        int pageNum = (int) mapObject.get("Count");
        return pageNum;
    }

    private String createStringFromObject(Map<String, Object> redisObject)
    {
        ObjectMapper mapper = new ObjectMapper();
        try
        {
            return mapper.writeValueAsString(redisObject);
        }
        catch (JsonProcessingException e)
        {

        }
        return null;
    }

    private Map<String, Object> createObjectFromString(String tmp)
    {
        ObjectMapper mapper = new ObjectMapper();
        mapper.configure(JsonParser.Feature.ALLOW_UNQUOTED_FIELD_NAMES, true);

        try
        {
            return mapper.readValue(tmp, new TypeReference<Map<String, Object>>(){});
        }
        catch (JsonParseException e)
        {

        }
        catch (JsonMappingException e)
        {

        }
        catch (IOException e)
        {

        }
        return null;
    }
}