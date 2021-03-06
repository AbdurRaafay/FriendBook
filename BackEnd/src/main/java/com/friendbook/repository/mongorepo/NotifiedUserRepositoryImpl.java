package com.friendbook.repository.mongorepo;

import com.friendbook.model.NotifiedUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class NotifiedUserRepositoryImpl implements NotifiedUserRepository
{
    @Autowired
    private MongoTemplate mongoTemplate;

    @Override
    public void insertNotifiedUser(List<NotifiedUser> nu)
    {
        mongoTemplate.insert(nu, NotifiedUser.class);
    }

    @Override
    public void modifyNotifiedUser(String nuID)
    {
        NotifiedUser nu = mongoTemplate.findById(nuID, NotifiedUser.class);
        nu.setSeen(true);
        mongoTemplate.save(nu);
    }

    @Override
    public List<NotifiedUser> getNotifiedUser(String userID)
    {
        List<NotifiedUser> lstNtf;
        Query query = new Query();
        query.addCriteria(Criteria.where("notifiedUserID").is(userID));
        lstNtf = mongoTemplate.find(query, NotifiedUser.class);
        return lstNtf;
    }

    @Override
    public void deleteNotifiedUser(String id)
    {
        Query query = new Query();
        query.addCriteria(Criteria.where("id").is(id));
        mongoTemplate.remove(query, NotifiedUser.class);
    }
}