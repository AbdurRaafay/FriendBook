package com.friendbook.service;

import com.friendbook.model.FriendRequest;
import com.friendbook.model.Notification;
import com.friendbook.model.NotifiedUser;
import com.friendbook.repository.mongorepo.FriendRequestRepository;
import com.friendbook.repository.mongorepo.NotificationRepository;
import com.friendbook.repository.mongorepo.NotifiedUserRepository;
import com.friendbook.repository.mongorepo.UserRepository;
import com.friendbook.repository.redisrepo.OnlineUsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import javax.annotation.PreDestroy;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

@Service
public class NotificationService
{
    @Autowired
    private NotificationRepository notrepo;

    @Autowired
    private NotifiedUserRepository notusrrepo;

    @Autowired
    private UserRepository usrrep;

    @Autowired
    private OnlineUsersRepository ousrrep;

    @Autowired
    private SimpMessageSendingOperations messagingTemplate;

    @Autowired
    private FriendRequestRepository frndrepo;
    private boolean shutdown = false;

    @Async
    public void processNotification()
    {
        while(!shutdown)
        {
            List<Notification> notificationsList = notrepo.getAllNotifications();
            if (notificationsList != null && !notificationsList.isEmpty())
            {
                for(Notification nt : notificationsList)
                {
                    String usrID = nt.getAuthorID();
                    Set<String> lstFriends = usrrep.getFriendListFromUsrID(usrID);
                    if (lstFriends != null && !lstFriends.isEmpty())
                    {
                        List<NotifiedUser> lstNu = new ArrayList<>();
                        for(String frnd : lstFriends)
                        {
                            NotifiedUser nu = new NotifiedUser(frnd, nt.getId(), false);
                            lstNu.add(nu);
                        }
                        notusrrepo.insertNotifiedUser(lstNu);
                    }
                    notrepo.updateNotificationStatus(nt.getId(), true);
                }
            }
        }
    }

    @Async
    public void sendNotification()
    {
        Set<String> sentNotifications = new HashSet<>();
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        while(!shutdown)
        {
            List<Map<String, String>> onlineUsrLst = ousrrep.getOnlineUsersList();
            if (onlineUsrLst != null && !onlineUsrLst.isEmpty())
            {
                for(Map<String, String> oul : onlineUsrLst)
                {
                    String status = oul.get("Info");
                    String[] info = status.split(",");
                    long diff = 0;
                    try
                    {
                        Date d1 = format.parse(info[2] + " " + info[3]);
                        Date d2 = new Date();
                        diff = (d2.getTime() - d1.getTime())/1000;//Convert diff to seconds
                    }
                    catch (ParseException e)
                    {
                        System.out.println(e);
                    }
                    if(diff > 5)//Dont send notifications before websocket connection is established otherwise messages are lost
                    {
                        List<NotifiedUser> nuLst = notusrrepo.getNotifiedUser(info[0]);
                        if (nuLst != null && !nuLst.isEmpty())
                        {
                            for(NotifiedUser nu : nuLst)
                            {
                                if(!sentNotifications.contains(nu.getId()))
                                {
                                    Notification nt = notrepo.getNotification(nu.getNotificationID());
                                    Map<String, Object> map = new HashMap<String, Object>();
                                    map.put("usrID", usrrep.getImageByID(nt.getAuthorID()));
                                    map.put("time", nt.getPosttime().toString());
                                    map.put("type", nt.getNtype().toString());
                                    map.put("entityID", nt.getEntityID());
                                    System.out.println(map);
                                    String usrEmail = usrrep.getEmailFromID(nu.getNotifiedUserID());
                                    System.out.println(usrEmail);
                                    messagingTemplate.convertAndSendToUser(usrEmail,"/queue/messages", map);
                                    sentNotifications.add(nu.getId());
                                }
                            }
                        }
                        List<FriendRequest> frp = frndrepo.getAllFriendRequestPending(info[0]);//Send friend requests
                        if (frp != null && !frp.isEmpty())
                        {
                            for(FriendRequest fr : frp)
                            {
                                Map<String, Object> map = new HashMap<String, Object>();
                                map.put("usrtoImageID", usrrep.getImageByID(fr.getToUserID()));
                                map.put("entityID", usrrep.getImageByID(fr.getFromUserID()));
                                map.put("usrfromFullName", usrrep.getFullNameByID(fr.getFromUserID()));
                                map.put("type", "FRIEND_REQUEST");
                                String usrEmail = usrrep.getEmailFromID(fr.getToUserID());
                                System.out.println(usrEmail);
                                messagingTemplate.convertAndSendToUser(usrEmail, "/queue/messages", map);
                            }
                        }
                    }
                }
            }
        }
    }

    @PreDestroy
    private void beandestroy()
    {
        shutdown = true;
    }
}
