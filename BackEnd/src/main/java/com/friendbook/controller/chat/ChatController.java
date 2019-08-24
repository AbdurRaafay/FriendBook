package com.friendbook.controller.chat;

import java.util.Collections;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.friendbook.model.User;
import com.friendbook.repository.mongorepo.UserRepository;
import com.friendbook.repository.redisrepo.ChatRepository;

@RestController
public class ChatController
{
    @Autowired
    private UserRepository usrrep;

    @Autowired
    private ChatRepository chtrep;

    @GetMapping("/createChatRoomID/{chatroomID}")
    public Map<String, String> createChatRoomID(@PathVariable String chatroomID)
    {
        String name = SecurityContextHolder.getContext().getAuthentication().getName();
        User currentUser = usrrep.findByEmail(name);
        String roomID = chtrep.createChatRoom(currentUser.getImageFileID(),chatroomID);
        System.out.println(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> " + name + " " + roomID + " " + chatroomID);
        return Collections.singletonMap("chatroomID", roomID);
    }
}