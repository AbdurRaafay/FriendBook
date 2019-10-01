package com.friendbook.repository.mongorepo;

import com.friendbook.model.FriendRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

@Repository
public class FriendRequestRepositoryImpl implements FriendRequestRepository
{
    private final MongoTemplate mongoTemplate;

    @Autowired
    public FriendRequestRepositoryImpl(MongoTemplate mongoTemplate)
    {
        this.mongoTemplate = mongoTemplate;
    }

    @Override
    public void insertFriendRequest(FriendRequest freq)
    {
        mongoTemplate.insert(freq);
    }

    @Override
    public boolean isFriendRequestPending(String userAID, String userBID)
    {
        Query query = new Query();
        Criteria criteriaA = Criteria.where("fromUserID").is(userAID).and("toUserID").is(userBID);
        Criteria criteriaB = Criteria.where("fromUserID").is(userBID).and("toUserID").is(userAID);
        Criteria criteriaC = new Criteria();
        criteriaC.orOperator(criteriaA, criteriaB);
        query.addCriteria(criteriaC);
        FriendRequest fr = mongoTemplate.findOne(query,FriendRequest.class);
        if(fr != null)
            return true;
        else
            return false;
    }
}
