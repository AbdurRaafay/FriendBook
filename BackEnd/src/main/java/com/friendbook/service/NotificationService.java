package com.friendbook.service;

import com.friendbook.model.Notification;
import com.friendbook.repository.mongorepo.NotificationRepository;
import com.friendbook.repository.mongorepo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public class NotificationService
{

    @Autowired
    private NotificationRepository notrepo;

    @Autowired
    private UserRepository usrrep;

    @Async("asyncExecutor")
    public void processNotification()
    {
        try
        {
            while(true)
            {
                List<Notification> notificationsList = notrepo.getNotifications();
                if (notificationsList != null && !notificationsList.isEmpty())
                {
                    for(Notification nt : notificationsList)
                    {
                        String usrID = nt.getAuthorID();
                        Set<String> lstFriends = usrrep.getFriendListFromUsrID(usrID);
                        if (lstFriends != null && !lstFriends.isEmpty())
                        {

                        }
                    }
                }
                Thread.sleep(1000);
            }
        }
        catch (InterruptedException e)
        {
            return;
        }
    }
}
