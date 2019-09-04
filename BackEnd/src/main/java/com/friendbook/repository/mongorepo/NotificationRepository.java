package com.friendbook.repository.mongorepo;

import com.friendbook.model.Notification;

import java.util.List;

public interface NotificationRepository
{
    void insertNotification(Notification ntf);
    void deleteProcessedNotification(Notification ntf);
    List<Notification> getNotifications();
}
