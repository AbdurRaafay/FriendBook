package com.friendbook.repository.redisrepo;

import com.friendbook.model.User;

import java.util.List;
import java.util.Map;

public interface OnlineUsersRepository
{
    void putUser(User usr);
    String isUserOnline(String userID);
    void logoutUser(String userID);
    List<Map<String, String>> getOnlineUsersList();
    void putNotificationUser(String notUsrID);
    boolean isNotificationUser(String notUsrID);
}
