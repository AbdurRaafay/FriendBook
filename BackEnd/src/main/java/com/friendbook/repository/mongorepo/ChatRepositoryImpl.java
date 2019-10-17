package com.friendbook.repository.mongorepo;

import com.friendbook.model.Chat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ChatRepositoryImpl implements ChatRepository
{
    private final MongoTemplate mongoTemplate;

    @Autowired
    public ChatRepositoryImpl(MongoTemplate mongoTemplate)
    {
        this.mongoTemplate = mongoTemplate;
    }

    @Override
    public List<Chat> findChats(String fromUserID, String toUserID)
    {
        System.out.println("UserIDs " + fromUserID + " " + toUserID);

        Query query = new Query();

        Criteria criteriaA = Criteria.where("fromUserID").is(fromUserID).and("toUserID").is(toUserID);

        Criteria criteriaB = Criteria.where("fromUserID").is(toUserID).and("toUserID").is(fromUserID);

        Criteria criteriaC = new Criteria();
        criteriaC.orOperator(criteriaA, criteriaB);

        query.addCriteria(criteriaC);
        query.with(new Sort(Sort.Direction.ASC, "timeStamp"));

        List<Chat> fpc = mongoTemplate.find(query, Chat.class);

        return fpc;
    }

    @Override
    public void insertChat(Chat cht)
    {
        mongoTemplate.insert(cht);
    }
}
