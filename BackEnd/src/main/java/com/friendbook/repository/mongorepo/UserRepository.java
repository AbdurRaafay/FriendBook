package com.friendbook.repository.mongorepo;

import com.friendbook.model.User;

public interface UserRepository
{
    User findByEmail(String email);
    String getFullNameByID(String userID);
    String getImageByID(String userID);
    String getUserIDFromImageByID(String imageID);
}
