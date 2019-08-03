package com.friendbook.repository.redisrepo;

import com.friendbook.model.User;

public interface OnlineUsersRepository
{
    public void putUser(User usr);
    public boolean isUserOnline(String userID);
    public void logoutUser(String userID);
}
