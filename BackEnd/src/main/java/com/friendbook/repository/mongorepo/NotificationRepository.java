package com.friendbook.repository.mongorepo;

import com.friendbook.model.Notification;

import java.util.List;

public interface NotificationRepository
{
    void insertNotification(Notification ntf);
    void updateNotificationStatus(String ntfID, boolean status);
    List<Notification> getAllNotifications();
    Notification getNotification(String ntID);
}
