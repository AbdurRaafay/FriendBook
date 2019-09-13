package com.friendbook.repository.mongorepo;

import com.friendbook.model.NotifiedUser;

import java.util.List;

public interface NotifiedUserRepository
{
    void insertNotifiedUser(List<NotifiedUser> nu);
    List<NotifiedUser> getNotifiedUser(String usrID);
    void deleteNotifiedUser(String id);
}
