package com.friendbook.controller;

import com.friendbook.repository.mongorepo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.Map;

@RestController
public class RegisterController
{

    @Autowired
    private UserRepository usrrep;

    @GetMapping("/checkemailavailability")
    public ResponseEntity<?> getSinglePost(@RequestParam String emailID)
    {
        System.out.println("  " + emailID);
        Map<String, Object> map = new HashMap<String, Object>();
        if(usrrep.doesEmailExist(emailID) == false)
            map.put("status", "AVAILABLE");
        else
            map.put("status", "NOT_AVAILABLE");
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

    @PostMapping(value = "/registernewuser", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> registerNewUser(@RequestPart String userData, @RequestPart MultipartFile imageFile)
    {
        Map<String, Object> map = new HashMap<String, Object>();
            map.put("status", "AVAILABLE");
        return new ResponseEntity<>(map, HttpStatus.OK);
    }

}
