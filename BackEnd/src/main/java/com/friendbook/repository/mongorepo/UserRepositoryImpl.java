package com.friendbook.repository.mongorepo;

import com.friendbook.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import java.util.HashSet;
import java.util.Set;

@Repository
public class UserRepositoryImpl implements UserRepository
{
    private final MongoTemplate mongoTemplate;

    @Autowired
    public UserRepositoryImpl(MongoTemplate mongoTemplate)
    {
        this.mongoTemplate = mongoTemplate;
    }

    @Override
    public User findByEmail(String email)
    {
        User usr;

        Query query = new Query();
        query.addCriteria(Criteria.where("email").is(email));
        usr = mongoTemplate.findOne(query, User.class);

        return usr;
    }

    @Override
    public String getFullNameByID(String userID)
    {
        User usr = getUserFromUserID(userID);
        if (usr == null)
        {
            System.out.println("User is null for ID " + userID);
            return null;
        }
        else
        {
            String fullname = usr.getFirstName() + " " + usr.getLastName();
            return fullname;
        }
    }

    @Override
    public String getImageByID(String userID)
    {
        User usr = getUserFromUserID(userID);
        if(usr != null)
        {
            String image = usr.getImageFileID();
            return image;
        }
        else
            return null;
    }

    @Override
    public String getUserIDFromImageByID(String imageID)
    {
        User usr;

        Query query = new Query();
        query.addCriteria(Criteria.where("imageFileID").is(imageID));
        usr = mongoTemplate.findOne(query, User.class);

        if(usr != null)
        {
            String userID = usr.getId();
            return userID;
        }
        else
            return null;
    }

    @Override
    public Set<String> getFriendListFromUsrID(String userID)
    {
        Set<String> lstfrnds = new HashSet<String>();
        User usr = getUserFromUserID(userID);
        if (usr == null)
        {
            System.out.println("User is null for ID " + userID);
        }
        else
        {
            lstfrnds = usr.getUserFriends();
        }
        return lstfrnds;
    }

    @Override
    public String getEmailFromID(String userID)
    {
        User usr = getUserFromUserID(userID);
        if (usr == null)
        {
            System.out.println("User is null for ID " + userID);
            return null;
        }
        else
        {
            return usr.getEmail();
        }
    }

    private User getUserFromUserID(String usrID)
    {
        User usr = null;

        Query query = new Query();
        query.addCriteria(Criteria.where("id").is(usrID));
        usr = mongoTemplate.findOne(query, User.class);

        return usr;
    }
}