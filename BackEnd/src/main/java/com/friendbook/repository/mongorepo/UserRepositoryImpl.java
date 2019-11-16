package com.friendbook.repository.mongorepo;

import com.friendbook.model.Post;
import com.friendbook.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Repository;

import java.util.HashSet;
import java.util.Set;

@Repository
public class UserRepositoryImpl implements UserRepository
{
    @Autowired
    private MongoTemplate mongoTemplate;

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
    public String getImageByID(String userID) //Get imageID from UserID
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

    @Override
    public boolean isFriend(String email, String imageID)//Is imageID friend of email
    {
        User usrA = findByEmail(email);
        User usrB = getUserFromUserID(getUserIDFromImageByID(imageID));
        return usrB.isFriend(usrA.getId());
    }

    @Override
    public void addFriend(String userIDA, String userIDB)
    {
        Query queryA = new Query();
        queryA.addCriteria(Criteria.where("id").is(userIDA));
        //Add userIDB as friend of userIDA
        mongoTemplate.updateFirst(queryA, new Update().addToSet("userFriends", userIDB), User.class);

        Query queryB = new Query();
        queryB.addCriteria(Criteria.where("id").is(userIDB));
        //Add userIDA as friend of userIDB
        mongoTemplate.updateFirst(queryB, new Update().addToSet("userFriends", userIDA), User.class);
    }

    @Override
    public boolean doesEmailExist(String email)
    {
        Query query = new Query();
        query.addCriteria(Criteria.where("email").is(email));
        User usr = mongoTemplate.findOne(query, User.class);

        if(usr == null)
            return false;
        else
            return true;
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