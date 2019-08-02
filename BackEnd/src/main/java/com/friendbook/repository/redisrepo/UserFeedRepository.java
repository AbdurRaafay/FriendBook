package com.friendbook.repository.redisrepo;

import java.util.List;
import java.util.Map;

import com.friendbook.model.Post;

public interface UserFeedRepository
{
    public void saveUserFeed(String usrID, List<Post> usrfd);
    public List<Map<String,Object>> getUserFeed(String usrID);
    public void createUserFeedCounter(String usrID, int count, int startIndex, int stopIndex);
    void setUserWallPostCounter(String usrID, int pageNum);
    int getUserWallPostCounter(String usrID);
}