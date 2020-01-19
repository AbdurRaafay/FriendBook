package com.friendbook.repository.mongorepo;

import com.friendbook.model.User;
import java.util.Set;

public interface UserRepository
{
    boolean doesEmailExist(String email);
    User findByEmail(String email);
    String getFullNameByID(String userID);
    String getImageByID(String userID);
    String getUserIDFromImageByID(String imageID);
    String getEmailFromID(String userID);
    Set<String> getFriendListFromUsrID(String userID);
    boolean isFriend(String email, String imageID);//Is imageID friend of email
    void addFriend(String userIDA, String userIDB);//Add userIDA as friend of userIDB and vice versa
    void addNewUser(User usr);
}
