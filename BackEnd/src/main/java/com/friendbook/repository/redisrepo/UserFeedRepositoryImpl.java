package com.friendbook.repository.redisrepo;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.fasterxml.jackson.core.type.TypeReference;
import com.friendbook.repository.mongorepo.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Repository;

import com.friendbook.model.Post;
import com.friendbook.model.PostFrontEnd;
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

    @Autowired
    private PostRepository fprep;

    //Convert posts to json with additional locklikesdislikes field
    //locklikesdislikes ensures a user likes or dislikes a post only once
    private List<String> getPostJson(String usrID, List<Post> pstlst)
    {
        List<String> tmpret = new ArrayList<String>();
        for(Post pst : pstlst)
        {
            boolean lockStatus;
            if(pst.hasUserLikedPost(pst.getAuthorID()) || pst.hasUserDislikedPost(pst.getAuthorID()))
                lockStatus = true;
            else
                lockStatus = false;
            PostFrontEnd pf = new PostFrontEnd(pst.getId(), pst.getPosttime(), pst.getPosttext(), pst.getLikes(),
                    pst.getDislikes(), pst.getNumComments(), lockStatus, userRepository.getFullNameByID(pst.getAuthorID()),
                    userRepository.getImageByID(pst.getAuthorID()));
            String tmp = RedisUtility.createJsonFromPosts(pf);
            tmpret.add(tmp);
        }
        return tmpret;
    }

    private void createCounter(String usrID, int size, int startIndex, int stopIndex, String typeOfCounter)
    {
        Map<String, Object> mapObject = new HashMap<>();
        mapObject.put("Size", size);
        mapObject.put("StartIndex", startIndex);
        mapObject.put("StopIndex", stopIndex);
        String tmp = RedisUtility.createStringFromObject(mapObject);
        if(tmp != null)
        {
            strRedisTemplate.opsForHash().put(KEY, usrID + typeOfCounter, tmp);
        }
    }

    @Override
    public void saveUserData(String usrID, List<Post> usrfd, String typeOfCounter, String typeOfData)
    {
        createCounter(usrID, usrfd.size(), 0, 9, typeOfCounter);
        List<String> tmpret = getPostJson(usrID, usrfd);
        if(tmpret != null)
        {
            strRedisTemplate.opsForList().rightPushAll(usrID + typeOfData, tmpret);
        }
    }

    @Override
    public List<String> getUserData(String usrID, String typeOfCounter, String typeOfData)
    {
        Map<String, Object> mapObject;
        String tmp = (String) strRedisTemplate.opsForHash().get(KEY, usrID + typeOfCounter);
        if(tmp != null)
        {
            mapObject = RedisUtility.createObjectFromString(tmp, new TypeReference<Map<String, Object>>(){});
            if(mapObject != null)
            {
                int Size = (int) mapObject.get("Size");
                int StartIndex = (int) mapObject.get("StartIndex");
                int StopIndex = (int) mapObject.get("StopIndex");

                System.out.println("Before Size " + Size + " StartIndex " + StartIndex + " StopIndex " + StopIndex);

                if (StartIndex > Size) //There is no more data
                    return null;
                if (StopIndex > Size)
                    StopIndex = Size;

                List<String> tmplist = strRedisTemplate.opsForList().range(usrID + typeOfData, StartIndex, StopIndex);
                if(tmplist != null)
                {
                    StartIndex = StopIndex + 1;
                    StopIndex += 10;
                    mapObject.put("StartIndex", StartIndex);
                    mapObject.put("StopIndex", StopIndex);

                    System.out.println("After Size " + Size + " StartIndex " + StartIndex + " StopIndex " + StopIndex);

                    strRedisTemplate.opsForHash().put(KEY, usrID + typeOfCounter, RedisUtility.createStringFromObject(mapObject));
                    System.out.println(typeOfCounter + "  " + typeOfData + " Size : " + tmplist.size());
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
    public List<String> getUserWallPosts(String usrID)
    {
        List<String> tmpret = new ArrayList<String>();
        int pagesize = 10;
        String tmp = (String) strRedisTemplate.opsForHash().get(KEY, usrID + "_WALLCOUNTER");
        if(tmp == null)//Check if data is in redis
        {
            System.out.println("No redis counter found for user wall");
            List<Post> fp = fprep.findByOwnerID(usrID, 100);
            if(fp != null)
            {
                System.out.println("Inserting data into redis");

                System.out.println("From database size fp " + fp.size());
                if(fp.size() <= pagesize)//User has less than pagesize posts
                {
                    tmpret = getPostJson(usrID, fp);
                    //These are just dummy values so that getuserData returns null next time
                    createCounter(usrID, fp.size(),20, 30, "_WALLCOUNTER");
                }
                else
                {
                    tmpret = getPostJson(usrID, fp.subList(0, pagesize));
                    createCounter(usrID, fp.size(), 10, 19, "_WALLCOUNTER");
                    saveUserData(usrID, fp.subList(pagesize, fp.size()), "_WALLCOUNTER", "_WALLDATA");
                }
                System.out.println("Size tmpret " + tmpret.size());
            }
        }
        else
        {
            tmpret = getUserData(usrID, "_WALLCOUNTER", "_WALLDATA");
        }
        return tmpret;
    }
}