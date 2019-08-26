package com.friendbook.controller.chat;

import java.io.IOException;
import java.security.Principal;
import java.util.Date;

import com.friendbook.model.Chat;
import com.friendbook.model.ChatMessage;
import com.friendbook.model.Notification;
import com.friendbook.repository.mongorepo.ChatRepository;
import com.friendbook.repository.mongorepo.NotificationRepository;
import com.friendbook.repository.mongorepo.UserRepository;
import com.friendbook.repository.redisrepo.OnlineUsersRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.stereotype.Controller;

@Controller
public class ChatControllerWebSocket
{

    @Autowired
    private SimpMessageSendingOperations messagingTemplate;

    @Autowired
    private OnlineUsersRepository ousrrep;

    @Autowired
    private ChatRepository chtrep;

    @Autowired
    private UserRepository usrrep;

    @Autowired
    private NotificationRepository notrepo;


    @MessageMapping("/chat")
    public void sendMessage(@Payload ChatMessage chatMessage)
    {
        String name = ousrrep.isUserOnline(usrrep.getUserIDFromImageByID(chatMessage.getRecipient()));
        if (name != null)
        {
            System.out.println("################# Name " + name);
            messagingTemplate.convertAndSendToUser(name, "/queue/messages", chatMessage);
            saveChat(chatMessage.getSender(), chatMessage.getRecipient(), chatMessage.getContent(), true);
        }
        else
        {
            saveChat(chatMessage.getSender(), chatMessage.getRecipient(), chatMessage.getContent(), false);
        }
    }

    private void saveChat(String from, String to, String text, boolean seen)
    {
        Date date = new Date();
        String toUsrID = usrrep.getUserIDFromImageByID(to);
        Chat chats = new Chat(usrrep.getUserIDFromImageByID(from), toUsrID, date, text, seen);
        chtrep.insertChat(chats);
        if(seen == false)
        {
            Notification ntf = new Notification(toUsrID, date, chats.getId(), Notification.NotificationType.LIKE);
            notrepo.insertNotification(ntf);
        }
    }
}