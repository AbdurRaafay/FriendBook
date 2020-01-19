package com.friendbook.controller;

import com.fasterxml.uuid.Generators;
import com.friendbook.model.User;
import com.friendbook.repository.mongorepo.UserRepository;
import com.friendbook.utility.SecurityUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.*;

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
    public ResponseEntity<?> registerNewUser(@RequestParam("userData") String userData, @RequestParam("imageFile") MultipartFile imageFile)
    {
        Map<String, Object> map = new HashMap<String, Object>();

        Path currentRelativePath = Paths.get("");
        String s = currentRelativePath.toAbsolutePath().toString();
        System.out.println("Current relative path is: " + s);
        UUID uuid2 = Generators.randomBasedGenerator().generate();
        String imageID = uuid2.toString();

        try
        {
            byte[] fileBytes = imageFile.getBytes();
            Path path  = Paths.get(s + "/images/" + imageID + ".jpg");
            System.out.println(path);
            Files.write(path, fileBytes);
        }
        catch (Exception e)
        {
            System.out.println(e.toString());
            map.put("status", "ERROR_FILE_SAVE");
            return new ResponseEntity<>(map, HttpStatus.OK);
        }

        String[] info = userData.split(",");

        int lastIndex = info[0].lastIndexOf("\"");
        int secondLastIndex = info[0].lastIndexOf("\"", lastIndex - 1);
        String firstName = info[0].substring(secondLastIndex + 1, lastIndex);

        lastIndex = info[1].lastIndexOf("\"");
        secondLastIndex = info[1].lastIndexOf("\"", lastIndex - 1);
        String lastName = info[1].substring(secondLastIndex + 1, lastIndex);

        lastIndex = info[2].lastIndexOf("\"");
        secondLastIndex = info[2].lastIndexOf("\"", lastIndex - 1);
        String password = info[2].substring(secondLastIndex + 1, lastIndex);

        lastIndex = info[3].lastIndexOf("\"");
        secondLastIndex = info[3].lastIndexOf("\"", lastIndex - 1);
        String phone = info[3].substring(secondLastIndex + 1, lastIndex);

        lastIndex = info[4].lastIndexOf("\"");
        secondLastIndex = info[4].lastIndexOf("\"", lastIndex - 1);
        String birthday = info[4].substring(secondLastIndex + 1, lastIndex);

        lastIndex = info[5].lastIndexOf("\"");
        secondLastIndex = info[5].lastIndexOf("\"", lastIndex - 1);
        String email = info[5].substring(secondLastIndex + 1, lastIndex);

        lastIndex = info[6].lastIndexOf("\"");
        secondLastIndex = info[6].lastIndexOf("\"", lastIndex - 1);
        String gender = info[6].substring(secondLastIndex + 1, lastIndex);

        System.out.println("first name >>>> " + firstName);
        System.out.println("lastName >>>> " + lastName);
        System.out.println("password >>>> " + password);
        System.out.println("phone >>>> " + phone);
        System.out.println("birthday >>>> " + birthday);
        System.out.println("email >>>> " + email);
        System.out.println("gender >>>> " + gender);

        String bDay = birthday.split("T")[0];
        String bD[] = bDay.split("-");
        Date date = new Date(Integer.parseInt(bD[0]) - 1900,
                Integer.parseInt(bD[1]) - 1, Integer.parseInt(bD[2]));
        System.out.println("Date >>> " + date);

        Set<String> UserFriendsID = new HashSet<String>();

        User usr = new User(firstName, lastName, email, phone,
                SecurityUtility.passwordEncoder().encode(password),
                true, date, gender, UserFriendsID, imageID);
        System.out.println("User >>>>> " + usr);

        map.put("status", "REGISTRATION_SUCCESSFUL");
        return new ResponseEntity<>(map, HttpStatus.OK);
    }
}
