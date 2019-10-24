package com.friendbook.repository.redisrepo;

import com.friendbook.model.User;

import java.util.List;
import java.util.Map;

public interface OnlineUsersRepository
{
    void putUser(User usr);
    String isUserOnline(String userID);
    void logoutUser(User usr);
    boolean doesSessionExist(String token);
    List<Map<String, String>> getOnlineUsersList();
}
