package com.friendbook.controller;

import java.security.Principal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import com.friendbook.model.User;
import com.friendbook.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.friendbook.repository.mongorepo.UserRepository;
import com.friendbook.repository.redisrepo.OnlineUsersRepository;

@RestController
public class LoginController
{
    @Autowired
    private OnlineUsersRepository ousrrep;

    @Autowired
    private UserRepository usrrep;

    @Autowired
    private NotificationService notService;

    @GetMapping("/login")
    public ResponseEntity<?> token(HttpSession session, HttpServletRequest request)
    {
        List<Map<String,Object>> fpreturn = new ArrayList<Map<String,Object>>();
        String name = SecurityContextHolder.getContext().getAuthentication().getName();
        User currentUser = usrrep.findByEmail(name);
        ousrrep.putUser(currentUser);
        Map<String, Object> map = new HashMap<>();
        map.put("token", session.getId());
        map.put("userImageID", currentUser.getImageFileID());
        map.put("currentUserName", currentUser.getFirstName() + " " + currentUser.getLastName());
        fpreturn.add(map);
        return new ResponseEntity<>(fpreturn, HttpStatus.OK);
    }

    @RequestMapping("/checkSession")
    public ResponseEntity<String> checkSession(Principal principal)
    {
        return new ResponseEntity<String>("SESSION_ACTIVE", HttpStatus.OK);
    }

    @GetMapping(value="/logout")
    public ResponseEntity<?> logout(Principal principal)
    {
        Map<String, Object> map = new HashMap<>();
        User currentUser = usrrep.findByEmail(principal.getName());
        ousrrep.logoutUser(currentUser.getId());
        SecurityContextHolder.clearContext();
        notService.deleteSentNotifications(principal.getName());
        System.out.println(principal.getName() + " logged out");
        map.put("status", "LOGOUT_SUCCESS");
        return new ResponseEntity<>(map, HttpStatus.OK);
    }
}