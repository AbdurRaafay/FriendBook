package com.friendbook.repository.mongorepo;

import com.friendbook.model.NotifiedUser;

import java.util.List;

public interface NotifiedUserRepository
{
    void insertNotifiedUser(List<NotifiedUser> nu);
    void modifyNotifiedUser(String nuID);
    List<NotifiedUser> getNotifiedUser(String usrID);
    void deleteNotifiedUser(String id);
}
