package com.friendbook.repository.redisrepo;

import java.util.List;
import java.util.Map;

import com.friendbook.model.Post;

public interface UserFeedRepository
{
    public void saveUserData(String usrID, List<Post> usrfd, String typeOfCounter, String typeOfData);
    public List<String> getUserData(String usrID, String typeOfCounter, String typeOfData);
    public List<String> getUserWallPosts(String usrID);
}