package com.friendbook.controller.chat;

import java.io.IOException;
import java.security.Principal;
import java.util.Date;

import com.friendbook.model.Chat;
import com.friendbook.model.ChatMessage;
import com.friendbook.repository.mongorepo.ChatRepository;
import com.friendbook.repository.mongorepo.UserRepository;
import com.friendbook.repository.redisrepo.OnlineUsersRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.stereotype.Controller;
import org.springframework.messaging.Message;

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

    @MessageMapping("/chat")
    public void sendMessage(@Payload ChatMessage chatMessage)
    {
        System.out.println("@@@@@@@@@@@@@@@@@@ " + chatMessage.getContent() + " Receipient " + chatMessage.getRecipient() + " Sender " + chatMessage.getSender());
        System.out.println("Recepient " + usrrep.getUserIDFromImageByID(chatMessage.getRecipient()));
        System.out.println("Sender " + usrrep.getUserIDFromImageByID(chatMessage.getSender()));

        String name = ousrrep.isUserOnline(usrrep.getUserIDFromImageByID(chatMessage.getRecipient()));
        if (name != null)
        {
            System.out.println("################# Name " + name);
            messagingTemplate.convertAndSendToUser(name, "/queue/messages", chatMessage);
            saveChat(chatMessage.getSender(), chatMessage.getRecipient(), chatMessage.getContent());
        }
        else
        {
            saveChat(chatMessage.getSender(), chatMessage.getRecipient(), chatMessage.getContent());
        }
    }

    @MessageMapping("/hello")
    public void activeUsers(Message<Object> message)
    {
        Principal user = message.getHeaders().get(SimpMessageHeaderAccessor.USER_HEADER, Principal.class);
        System.out.println("Websocket user " + user.getName());
    }

    private void saveChat(String from, String to, String text)
    {
        Date date = new Date();
        Chat chats = new Chat(usrrep.getUserIDFromImageByID(from), usrrep.getUserIDFromImageByID(to), date, text);
        chtrep.insertChat(chats);
    }
}