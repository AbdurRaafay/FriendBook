package com.friendbook.controller;

import java.security.Principal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import com.friendbook.model.User;
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
    public ResponseEntity<String> checkSession()
    {
        return new ResponseEntity<>("Session Active!", HttpStatus.OK);
    }

    @RequestMapping(value="/logout")
    public ResponseEntity<String> logout(Principal principal)
    {
        User currentUser = usrrep.findByEmail(principal.getName());
        ousrrep.logoutUser(currentUser.getImageFileID());
        SecurityContextHolder.clearContext();
        System.out.println(principal.getName() + " logged out");
        return new ResponseEntity<String>("Logout Successfully!", HttpStatus.OK);
    }
}