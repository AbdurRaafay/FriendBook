package com.friendbook.repository.mongorepo;

import com.friendbook.model.Notification;

public interface NotificationRepository
{
    void insertNotification(Notification ntf);
    void deleteProcessedNotification(Notification ntf);
}
