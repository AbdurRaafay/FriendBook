package com.friendbook.controller;

import com.friendbook.model.ChatMessage;
import com.friendbook.utility.NamesSearchUtility;
import me.xdrop.fuzzywuzzy.model.ExtractedResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.stereotype.Controller;

import java.security.Principal;
import java.util.*;

@Controller
public class SearchControllerWebSocket
{
    @Autowired
    private SimpMessageSendingOperations messagingTemplate;

    @MessageMapping("/search")
    public void sendMessage(Principal principal, @Payload ChatMessage chatMessage)
    {
        List<ExtractedResult> sr = NamesSearchUtility.getSearchResults(chatMessage.getContent());
        if(sr != null && !sr.isEmpty())
        {
            sr.sort(Comparator.comparing(ExtractedResult::getScore).reversed());
            List<Map<String, Object>> res = new ArrayList<>();
            List<ExtractedResult> srSmall;
            if(sr.size() > 10)
                srSmall = sr.subList(0, 10);
            else
                srSmall = sr;
            for(ExtractedResult er : srSmall)
            {
                Map<String, Object> map = new HashMap<String, Object>();
                String[] info = er.getString().split(":");
                map.put("imageID", info[0]);
                map.put("userName", info[1]);
                res.add(map);
            }
            messagingTemplate.convertAndSendToUser(principal.getName(), "/queue/messages", res);
        }
    }
}
