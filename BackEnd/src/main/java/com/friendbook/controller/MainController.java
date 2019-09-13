package com.friendbook.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.security.Principal;

import com.friendbook.model.Notification;
import com.friendbook.repository.mongorepo.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.friendbook.repository.redisrepo.OnlineUsersRepository;
import com.friendbook.repository.redisrepo.UserFeedRepository;
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

    @Autowired
    private PostRepository pstrepo;

    @Autowired
    private ChatRepository chatrepo;

    @Autowired
    private PostRepository fprep;

    @Autowired
    private NotificationRepository notrepo;

    @GetMapping("/getwallposts")
    public ResponseEntity<?> getWallPosts(Principal principal)
    {
        List<String> fpreturn = usrfdrep.getUserWallPosts(getUserIDFromPricipal(principal));
        if (fpreturn != null && !fpreturn.isEmpty())
            return new ResponseEntity<>(fpreturn, HttpStatus.OK);
        else
            return new ResponseEntity<>("", HttpStatus.NOT_FOUND);
    }

    @GetMapping("/getnewsfeed")
    public ResponseEntity<?> getNewsFeed(Principal principal)
    {
        List<String> fpreturn = usrfdrep.getUserData(getUserIDFromPricipal(principal),"_NEWSFEEDCOUNTER", "_NEWSFEEDDATA");
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

    @GetMapping("/addwallpost/{WallText}/")
    public ResponseEntity<?> addWallPost(Principal principal, @PathVariable String WallText)
    {
        System.out.println("AddWallPost " + WallText);
        Date date = new Date();
        String usrID = getUserIDFromPricipal(principal);
        Post pc = new Post(usrID, date, WallText, 0, 0, 0);
        String tmp = pstrepo.insertPost(pc);
        System.out.println(tmp);
        if(tmp != null)
        {
            Notification ntf = new Notification(usrID, date, tmp, Notification.NotificationType.NEWPOST);
            notrepo.insertNotification(ntf);
            Map<String, Object> map = new HashMap<>();
            map.put("WallPostID", tmp);
            return new ResponseEntity<>(map, HttpStatus.OK);
        }
        else
            return new ResponseEntity<>("", HttpStatus.NOT_FOUND);
    }

    @GetMapping("/addcomment/{PostID}/{Comment}/")
    public void addComment(Principal principal, @PathVariable String PostID, @PathVariable String Comment)
    {
        Date date = new Date();
        String usrID = getUserIDFromPricipal(principal);
        Comment pc = new Comment(PostID, usrID, date, Comment);
        System.out.println("PostID " + PostID + "Comment " + Comment);
        pcrep.insert(pc);
        fprep.updateNumComments(PostID);
        Notification ntf = new Notification(usrID, date, PostID, Notification.NotificationType.COMMENT);
        notrepo.insertNotification(ntf);
    }

    @GetMapping("/addlikes/{PostID}/")
    public void addLikes(Principal principal, @PathVariable String PostID)
    {
        fprep.updateLikes(PostID);
        Date date = new Date();
        String usrID = getUserIDFromPricipal(principal);
        Notification ntf = new Notification(usrID, date, PostID, Notification.NotificationType.LIKE);
        notrepo.insertNotification(ntf);
    }

    @GetMapping("/adddislikes/{PostID}/")
    public void addDisLikes(Principal principal, @PathVariable String PostID)
    {
        fprep.updateDisLikes(PostID);
        Date date = new Date();
        String usrID = getUserIDFromPricipal(principal);
        Notification ntf = new Notification(usrID, date, PostID, Notification.NotificationType.DISLIKE);
        notrepo.insertNotification(ntf);
    }

    private String getUserIDFromPricipal(Principal principal)
    {
        User currentUser = usrrep.findByEmail(principal.getName());
        return currentUser.getId();
    }
}