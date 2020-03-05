package com.friendbook.repository.mongorepo;

import com.friendbook.model.Chat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

@Repository
public class ChatRepositoryImpl implements ChatRepository
{
    @Autowired
    private MongoTemplate mongoTemplate;

    @Override
    public List<Chat> findChats(String fromUserID, String toUserID)//fromUserID and toUserID are imageIDs
    {
        Query queryA = new Query();
        Criteria criteriaA = Criteria.where("fromUserID").is(fromUserID).and("toUserID").is(toUserID);
        queryA.addCriteria(criteriaA);
        List<Chat> fpcA = mongoTemplate.find(queryA, Chat.class);

        Query queryB = new Query();
        Criteria criteriaB = Criteria.where("fromUserID").is(toUserID).and("toUserID").is(fromUserID);
        queryB.addCriteria(criteriaB);
        List<Chat> fpcB = mongoTemplate.find(queryB, Chat.class);

        List<Chat> fpcCombined = new ArrayList<>();
        if((fpcA != null && fpcA.size() > 0) || (fpcB != null && fpcB.size() > 0))
        {
            if(fpcB != null && fpcB.size() > 0)
            {
                System.out.println("Condition A");
                fpcCombined.addAll(fpcA);
                fpcCombined.addAll(fpcB);
                System.out.println("A = " + fpcA.size() + " B = " + fpcB.size());
            }
            else
            {
                System.out.println("Condition B");
                fpcCombined.addAll(fpcA);
                System.out.println("A = " + fpcA.size());
            }
            fpcCombined.sort(Comparator.comparing(Chat::getTimeStamp));
        }
        return fpcCombined;
    }

    @Override
    public void insertChat(Chat cht)
    {
        mongoTemplate.insert(cht);
    }
}
