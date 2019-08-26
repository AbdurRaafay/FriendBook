package com.friendbook.service;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class NotificationService
{
    @Scheduled(fixedDelay = 50000)
    public void processNotifications()
    {
        
    }
}
