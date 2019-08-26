package com.friendbook.repository.mongorepo;

import com.friendbook.model.Notification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class NotificationRepositoryImpl implements NotificationRepository
{
    private final MongoTemplate mongoTemplate;

    @Autowired
    public NotificationRepositoryImpl(MongoTemplate mongoTemplate)
    {
        this.mongoTemplate = mongoTemplate;
    }

    @Override
    public void deleteProcessedNotification(Notification ntf)
    {

    }

    @Override
    public void insertNotification(Notification ntf)
    {
        mongoTemplate.insert(ntf);
    }
}
