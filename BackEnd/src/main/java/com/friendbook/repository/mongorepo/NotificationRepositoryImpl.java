package com.friendbook.repository.mongorepo;

import com.friendbook.model.Notification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

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

    @Override
    public List<Notification> getNotifications()
    {
        List<Notification> lstNtf;
        Query query = new Query();
        query.addCriteria(Criteria.where("isprocessed").is(false));
        query.with(new Sort(Sort.Direction.DESC,"nottime"));
        lstNtf = mongoTemplate.find(query, Notification.class);
        return lstNtf;
    }
}
