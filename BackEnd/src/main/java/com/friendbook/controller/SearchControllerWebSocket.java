package com.friendbook.controller;

import com.friendbook.model.ChatMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.stereotype.Controller;

@Controller
public class SearchControllerWebSocket
{
    @Autowired
    private SimpMessageSendingOperations messagingTemplate;

    @MessageMapping("/search")
    public void sendMessage(@Payload ChatMessage chatMessage)
    {

    }
}
