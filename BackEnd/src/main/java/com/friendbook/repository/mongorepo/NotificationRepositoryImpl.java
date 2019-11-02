package com.friendbook.repository.mongorepo;

import com.friendbook.model.Notification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class NotificationRepositoryImpl implements NotificationRepository
{
    @Autowired
    private MongoTemplate mongoTemplate;

    @Override
    public void insertNotification(Notification ntf)
    {
        mongoTemplate.insert(ntf);
    }

    @Override
    public void updateNotificationStatus(String ntfID, boolean status)
    {
        Query query = new Query();
        query.addCriteria(Criteria.where("id").is(ntfID));
        mongoTemplate.updateFirst(query, new Update().set("isProcessed", status), Notification.class);
    }

    //Get notifications which have not been processed
    @Override
    public List<Notification> getAllNotifications()
    {
        List<Notification> lstNtf;
        Query query = new Query();
        query.addCriteria(Criteria.where("isProcessed").is(false));
        query.with(new Sort(Sort.Direction.DESC, "nottime"));
        lstNtf = mongoTemplate.find(query, Notification.class);
        return lstNtf;
    }

    @Override
    public Notification getNotification(String ntID)
    {
        Notification ntf;
        ntf = mongoTemplate.findById(ntID, Notification.class);
        return ntf;
    }

    @Override
    public Notification getNotificationFromEntityID(String entityID)
    {
        Notification Ntf;
        Query query = new Query();
        query.addCriteria(Criteria.where("entityID").is(entityID));
        Ntf = mongoTemplate.findOne(query, Notification.class);
        return Ntf;
    }
}
