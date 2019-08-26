package com.friendbook.repository.mongorepo;

import com.friendbook.model.NotifiedUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class NotifiedUserRepositoryImpl implements NotifiedUserRepository
{
    private final MongoTemplate mongoTemplate;

    @Autowired
    public NotifiedUserRepositoryImpl(MongoTemplate mongoTemplate)
    {
        this.mongoTemplate = mongoTemplate;
    }

    @Override
    public void insertNotifieduser(NotifiedUser nu)
    {
        mongoTemplate.insert(nu);
    }
}
