package com.friendbook.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.friendbook.repository.redisrepo.OnlineUsersRepository;
import com.friendbook.repository.redisrepo.UserFeedRepository;
import com.friendbook.repository.mongorepo.CommentRepository;
import com.friendbook.repository.mongorepo.PostRepository;
import com.friendbook.repository.mongorepo.UserRepository;
import com.friendbook.model.Comment;
import com.friendbook.model.Post;
import com.friendbook.model.User;

@RestController
public class MainController
{
    @Autowired
    private UserRepository usrrep;

    @Autowired
    private UserFeedRepository usrfdrep;

    @Autowired
    private CommentRepository pcrep;

    @Autowired
    private OnlineUsersRepository ousrrep;

//    @Autowired
//    private ChatRepository chatrep;

    @Autowired
    private PostRepository fprep;

    @GetMapping("/getwallposts")
    public ResponseEntity<?> getWallPosts(Principal principal)
    {
        List<Map<String,Object>> wpreturn = new ArrayList<Map<String,Object>>();

        User currentUser = usrrep.findByEmail(principal.getName());
        System.out.println("getWallPosts Name  " + currentUser.getFirstName() + currentUser.getLastName());

        List<Post> wp = fprep.findByOwnerID(currentUser.getId(), usrfdrep.getUserWallPostCounter(currentUser.getId()), 10);

        if (wp != null && !wp.isEmpty())
        {
            for(int i = 0; i < wp.size(); i++)
            {
                Map<String, Object> map = new HashMap<>();
                map.put("feedID", wp.get(i).getId());
                map.put("fullName", usrrep.getFullNameByID(wp.get(i).getAuthorID()));
                map.put("imagePath", usrrep.getImageByID(wp.get(i).getAuthorID()));
                map.put("text", wp.get(i).getPosttext());
                map.put("timestamp", wp.get(i).getPosttime());
                map.put("likes", wp.get(i).getLikes());
                map.put("dislikes", wp.get(i).getDislikes());
                map.put("numComments", wp.get(i).getNumComments());
                map.put("locklikesdislikes", false);
                wpreturn.add(map);
                map = null;
            }

            return new ResponseEntity<>(wpreturn, HttpStatus.OK);
        }
        else
            return new ResponseEntity<>("", HttpStatus.NOT_FOUND);
    }

    @GetMapping("/getposts")
    public ResponseEntity<?> getPosts(Principal principal)
    {
        User currentUser = usrrep.findByEmail(principal.getName());

        List<String> fpreturn = usrfdrep.getUserFeed(currentUser.getId());

        if (fpreturn != null && !fpreturn.isEmpty())
            return new ResponseEntity<>(fpreturn, HttpStatus.OK);
        else
            return new ResponseEntity<>("", HttpStatus.NOT_FOUND);
    }

    @GetMapping("/getcomments/{PostID}")
    public ResponseEntity<?> getComments(@PathVariable String PostID)
    {
        List<Map<String,Object>> fpreturn = new ArrayList<Map<String,Object>>();
        List<Comment> fc = pcrep.findByParentPostID(PostID);
        System.out.println("==============================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Inside getcomments " + fc.size());
        if (fc != null && !fc.isEmpty())
        {
            for(int i = 0; i < fc.size(); i++)
            {
                Map<String, Object> map = new HashMap<String, Object>();
                map.put("fullName", usrrep.getFullNameByID(fc.get(i).getAuthorID()));
                map.put("text", fc.get(i).getPosttext());
                map.put("timestamp", fc.get(i).getPosttime());
                map.put("imagePath", usrrep.getImageByID(fc.get(i).getAuthorID()));
                fpreturn.add(map);
            }
            return new ResponseEntity<>(fpreturn, HttpStatus.OK);
        }
        else
            return new ResponseEntity<>("", HttpStatus.NOT_FOUND);
    }

    @GetMapping("/getfriendslist")
    public ResponseEntity<?> getFriendsStatus(Principal principal)
    {
        List<Map<String,Object>> fpreturn = new ArrayList<Map<String,Object>>();
        User currentUser = usrrep.findByEmail(principal.getName());
        Set<String> usrfrnds = currentUser.getUserFriends();

        if (usrfrnds != null && !usrfrnds.isEmpty())
        {
            for (String s : usrfrnds)
            {
                Map<String, Object> map = new HashMap<>();
                map.put("fullName", usrrep.getFullNameByID(s));
                map.put("onlinestatus", ousrrep.isUserOnline(s));
                map.put("imagePath", usrrep.getImageByID(s));
                fpreturn.add(map);
            }
            return new ResponseEntity<>(fpreturn, HttpStatus.OK);
        }
        else
            return new ResponseEntity<>(fpreturn, HttpStatus.NOT_FOUND);
    }

//    @GetMapping("/getchathistory/{UserAID}/{UserBID}/")
//    public ResponseEntity<?> getChatHistory(@PathVariable String UserAID, @PathVariable String UserBID)
//    {
//        System.out.println(UserAID + " " + UserBID);
//
//        List<Chats> chats = chatrep.findChats(usrrep.getUserIDFromImageByID(UserAID), usrrep.getUserIDFromImageByID(UserBID));
//
//        if (chats.size() > 0)
//        {
//            return new ResponseEntity<>(chats, HttpStatus.OK);
//        }
//        else
//            return new ResponseEntity<>("", HttpStatus.NOT_FOUND);
//    }

    @GetMapping("/addcomment/{UserID}/{PostID}/{Comment}/")
    public void addComment(@PathVariable String UserID, @PathVariable String PostID, @PathVariable String Comment)
    {
        Date date = new Date();
        Comment pc = new Comment(PostID, usrrep.getUserIDFromImageByID(UserID), date, Comment);
        System.out.println("UserID " + UserID + "PostID " + PostID + "Comment " + Comment);
        pcrep.insert(pc);
        fprep.updateNumComments(PostID);
    }

    @GetMapping("/addlikes/{UserID}/{PostID}/")
    public void addLikes(@PathVariable String UserID, @PathVariable String PostID)
    {
        fprep.updateLikes(PostID);
    }

    @GetMapping("/adddislikes/{UserID}/{PostID}/")
    public void addDisLikes(@PathVariable String UserID, @PathVariable String PostID)
    {
        fprep.updateDisLikes(PostID);
    }

}