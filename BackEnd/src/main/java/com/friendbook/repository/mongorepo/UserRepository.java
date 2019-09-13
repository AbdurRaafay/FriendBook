package com.friendbook.repository.mongorepo;

import com.friendbook.model.User;
import java.util.Set;

public interface UserRepository
{
    User findByEmail(String email);
    String getFullNameByID(String userID);
    String getImageByID(String userID);
    String getUserIDFromImageByID(String imageID);
    String getEmailFromID(String userID);
    Set<String> getFriendListFromUsrID(String userID);
}
