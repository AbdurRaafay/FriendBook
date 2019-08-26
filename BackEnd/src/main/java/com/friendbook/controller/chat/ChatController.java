package com.friendbook.controller.chat;

import java.util.Collections;
import java.util.List;
import java.util.Map;

import com.friendbook.model.Chat;
import com.friendbook.repository.mongorepo.ChatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.friendbook.repository.mongorepo.UserRepository;
import com.friendbook.repository.redisrepo.ChatRoomRepository;

@RestController
public class ChatController
{
    @Autowired
    private UserRepository usrrep;

    @Autowired
    private ChatRoomRepository redischatrepo;

    @Autowired
    private ChatRepository chatrepo;

    @GetMapping("/getchathistory/{UserAID}/{UserBID}/")
    public ResponseEntity<?> getChatHistory(@PathVariable String UserAID, @PathVariable String UserBID)
    {
        System.out.println(UserAID + " " + UserBID);

        List<Chat> chats = chatrepo.findChats(usrrep.getUserIDFromImageByID(UserAID), usrrep.getUserIDFromImageByID(UserBID));

        if (chats.size() > 0)
        {
            return new ResponseEntity<>(chats, HttpStatus.OK);
        }
        else
            return new ResponseEntity<>("", HttpStatus.NOT_FOUND);
    }
}