package com.friendbook.repository.mongorepo;

import com.friendbook.model.FriendRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class FriendRequestRepositoryImpl implements FriendRequestRepository
{
    @Autowired
    private MongoTemplate mongoTemplate;

    @Override
    public void insertFriendRequest(FriendRequest freq)
    {
        mongoTemplate.insert(freq);
    }

    //Check if friend request is pending from UserA to UserB
    @Override
    public boolean isFriendRequestPending(String userAID, String userBID)
    {
        Query query = new Query();
        Criteria criteria = Criteria.where("fromUserID").is(userAID).and("toUserID").is(userBID);
        query.addCriteria(criteria);
        FriendRequest fr = mongoTemplate.findOne(query,FriendRequest.class);
        if(fr != null)
            return true;
        else
            return false;
    }

    @Override
    public List<FriendRequest> getAllFriendRequestPending(String userID)
    {
        Query query = new Query();
        Criteria criteria = Criteria.where("toUserID").is(userID).and("frStatus").is(FriendRequest.FriendRequestStatus.PENDING);
        query.addCriteria(criteria);
        List<FriendRequest> frLst = mongoTemplate.find(query,FriendRequest.class);
        return frLst;
    }

    @Override
    public void deleteFriendRequest(String userAID, String userBID)//Delete friend request from userBID to userAID
    {
        Query query = new Query();
        Criteria criteria = Criteria.where("toUserID").is(userAID).and("fromUserID").is(userBID);
        query.addCriteria(criteria);
        mongoTemplate.remove(query,FriendRequest.class);
    }
}
