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
import java.util.stream.Collectors;

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
    private Set<String> friendsListUpdateToBeNotified = new HashSet<>();
    private Set<String> friendsListUpdateSent = new HashSet<>();
    private Set<String> sentNotifications = new HashSet<>();
    private Set<String> sentFriendRequestNotifications = new HashSet<>();

    @Async
    public void processNotification()
    {
        while(!shutdown)
        {
            List<Notification> notificationsList = notrepo.getAllNotifications();//Get all notifications
            if (notificationsList != null && !notificationsList.isEmpty())
            {
                for(Notification nt : notificationsList)
                {
                    String usrID = nt.getAuthorID();
                    Set<String> lstFriends = usrrep.getFriendListFromUsrID(usrID);//Get all notification author's friends
                    if (lstFriends != null && !lstFriends.isEmpty())
                    {
                        List<NotifiedUser> lstNu = new ArrayList<>();
                        for(String frnd : lstFriends)//Create list of notified users
                        {
                            NotifiedUser nu = new NotifiedUser(frnd, nt.getId(), false);//Insert unsent notified users in database
                            lstNu.add(nu);
                        }
                        notusrrepo.insertNotifiedUser(lstNu);//Save list of notified users for sendNotification()
                    }
                    notrepo.updateNotificationStatus(nt.getId(), true);//Set status of processed notifications to true
                }
            }
        }
    }

    //For every online user, send notifications, friend requests and updated friends list
    @Async
    public void sendNotification()
    {
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
                    String usrEmail = usrrep.getEmailFromID(info[0]);//info[0] has userID
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
                    if(diff > 5)//Wait 5 seconds so that websocket connection is established otherwise messages are lost
                    {
                        List<NotifiedUser> nuLst = notusrrepo.getNotifiedUser(info[0]);
                        if (nuLst != null && !nuLst.isEmpty())
                        {
                            for(NotifiedUser nu : nuLst)
                            {
                                String notificationID = nu.getNotificationID();
                                String sentNotChkID = usrEmail+nu.getId();
                                if(!sentNotifications.contains(sentNotChkID))
                                {
                                    Notification nt = notrepo.getNotification(notificationID);
                                    Map<String, Object> map = new HashMap<String, Object>();
                                    String imgID = usrrep.getImageByID(nt.getAuthorID());
                                    map.put("usrImageID", imgID);
                                    map.put("userFullName", usrrep.getFullNameByID(nt.getAuthorID()));
                                    map.put("time", nt.getPosttime().toString());
                                    map.put("type", nt.getNtype().toString());
                                    if(usrrep.isFriend(usrEmail, imgID))//Do not send postID to non friend
                                    {
                                        map.put("postID", nt.getEntityID());
                                    }
                                    System.out.println(map);
                                    System.out.println(usrEmail);
                                    messagingTemplate.convertAndSendToUser(usrEmail,"/queue/messages", map);
                                    sentNotifications.add(sentNotChkID);
                                }
                            }
                        }

                        //Send friend requests notification
                        List<FriendRequest> frp = frndrepo.getAllFriendRequestPending(info[0]);
                        if (frp != null && !frp.isEmpty())
                        {
                            for(FriendRequest fr : frp)
                            {
                                String fromUsrID = fr.getFromUserID();
                                String chkSentFrndReq = usrEmail + fromUsrID;
                                // Make sure we are sending friend request only once
                                if(!sentFriendRequestNotifications.contains(chkSentFrndReq))
                                {
                                    System.out.println("Friend request list size " + frp.size());
                                    Map<String, Object> map = new HashMap<String, Object>();
                                    map.put("usrImageID", usrrep.getImageByID(fromUsrID));
                                    map.put("userFullName", usrrep.getFullNameByID(fromUsrID));
                                    map.put("type", "FRIEND_REQUEST");
                                    System.out.println("Friend request notification " + usrEmail);
                                    messagingTemplate.convertAndSendToUser(usrEmail, "/queue/messages", map);
                                    sentFriendRequestNotifications.add(chkSentFrndReq);
                                }
                            }
                        }

                        //Update friends list for newly accepted friend request
                        Set<String> resultFiltered = friendsListUpdateToBeNotified.stream()
                                .filter(line -> line.matches("$" + info[0] + ":"))
                                .collect(Collectors.toSet());
                        resultFiltered.forEach(t->
                        {
                            if(!friendsListUpdateSent.contains(t))//Dont send if already sent ;-)
                            {
                                Map<String, Object> map = new HashMap<String, Object>();
                                String usrID = t.substring(t.indexOf(":"));
                                map.put("userfullname", usrrep.getFullNameByID(usrID));
                                map.put("imagePath", usrrep.getImageByID(usrID));
                                map.put("onlinestatus", usrrep.getImageByID(usrID));
                                map.put("type", "FRIEND_LIST_UPDATE");
                                System.out.println("Friend list update " + map);
                                messagingTemplate.convertAndSendToUser(usrEmail, "/queue/messages", map);
                                friendsListUpdateSent.add(t);
                            }
                        });
                    }
                }
            }
        }
    }

    public void addFriend(String usrIDA, String usrIDB)
    {
        friendsListUpdateToBeNotified.add(usrIDA + ":" + usrIDB);
    }

    //We need to delete all entries beginning with usrID so that next time usrID logs in we can send the notifications again
    public void deleteSentNotifications(String usrEmail)
    {
        System.out.println("Deletions " + usrEmail);
        Set<String> resultFiltered = sentFriendRequestNotifications.stream().filter(line -> line.matches(usrEmail))
                .collect(Collectors.toSet());
        if(!resultFiltered.isEmpty())
        {
            resultFiltered.forEach(t->System.out.println(t));
            sentFriendRequestNotifications.removeAll(resultFiltered);
        }
        resultFiltered = sentNotifications.stream().filter(line -> line.matches(usrEmail))
                .collect(Collectors.toSet());
        if(!resultFiltered.isEmpty())
        {
            resultFiltered.forEach(t->System.out.println(t));
            sentNotifications.removeAll(resultFiltered);
        }
    }

    @PreDestroy
    private void beandestroy()
    {
        shutdown = true;
    }
}