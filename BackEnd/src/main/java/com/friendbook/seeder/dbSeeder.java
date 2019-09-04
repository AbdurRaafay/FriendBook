package com.friendbook.seeder;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.concurrent.ThreadLocalRandom;
import java.util.UUID;

import com.friendbook.model.Comment;
import com.friendbook.model.Post;
import com.friendbook.model.User;
import com.friendbook.repository.mongorepo.PostRepository;
import com.friendbook.service.NotificationService;
import com.friendbook.utility.SecurityUtility;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import com.mongodb.MongoClient;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.core.io.ClassPathResource;

import com.fasterxml.uuid.Generators;
import com.friendbook.repository.mongorepo.UserRepository;
import com.friendbook.repository.redisrepo.UserFeedRepository;

@Component
public class dbSeeder implements CommandLineRunner
{
    private String[] filetext = null;

    private int MaxUsers = 20;
    private int NoOfFriends = 5;
    private int multipleOfPosts = 20;
    private int MaxPosts = MaxUsers * multipleOfPosts;
    private int multipleOfComments = 5;
    private int MaxComments = MaxPosts * multipleOfComments;
    private int LenOfPost = 50;
    private int LenOfComment = 10;

    private Post fparr[] = new Post[MaxPosts];
    private Comment pstcmnt[] = new Comment[MaxComments];

    private List<User> users = new ArrayList<User>();
    private List<String> names = new ArrayList<String>();

    private String usrnames[] = {"James Cameron","Brittany Spears","Angelina Jolie","Micky Mouse","Justin Bieber",
            "Erwin Schrodinger","Mark Twain","Thomas Mann","Franz Kafka","Elvis Presley",
            "Karl Marx","Micheal Jackson","Celine Dion","Anna Kornikova","James Bond","Diago Maradonna",
            "Isaac Newton","Steve Wozniak","Ken Thomson","Alan Turing"};

    private MongoOperations mongoOps;

    @Autowired
    private PostRepository fprep;

    @Autowired
    private UserRepository usrrep;

    @Autowired
    private UserFeedRepository usrfdrep;

    @Autowired
    private NotificationService notSrv;

    @Override
    public void run(String...strings) throws Exception
    {
        this.mongoOps = new MongoTemplate(new MongoClient("localhost", 27017), "FriendBookDB");

        InitializeMongoDB();
        InitializeRedisCache();
        notSrv.processNotification();
        System.out.println("************************************************Done************************************************");
    }

    public dbSeeder()
    {
        super();
    }

    private void InitializeMongoDB()
    {
        InitializeUsers();
        UpdateUsers();
        GenerateFriendIDs();
        users.clear();
        users = GetUsersFromDB();
        RenameFiles(names);
        filetext = ReadDummyFile();
        InitializeFeedPosts();
        InitializeComments();

        LinkPostswithUsers();
        InsertPosts();
        UpdatePosts();

        LinkPostswithComments();
        InsertComments();
        UpdateComments();
    }

    private void InitializeRedisCache()
    {
        for (int i = 0; i < MaxUsers; i++)
        {
            String Name[] = usrnames[i].split(" ");
            User currentUser = usrrep.findByEmail(Name[0] + Name[1] + "@foo.com");
            if(!currentUser.getUserFriends().isEmpty())
            {
                List<Post> fp = fprep.getPostsOfFriends(currentUser.getUserFriends());
                if(!fp.isEmpty())
                {
                    usrfdrep.saveUserData(currentUser.getId(), fp, "_NEWSFEEDCOUNTER", "_NEWSFEEDDATA");
                }
            }
        }
    }

    private void InitializeUsers()
    {

        String Name[];
        String Gender[] = {"male","female"};

        Set<String> UserFriendsID = new HashSet<String>();

        for (int i = 0; i < MaxUsers; i++)
        {
            Name = usrnames[i].split(" ");
            UUID uuid2 = Generators.randomBasedGenerator().generate();
            users.add(new User(Name[0], Name[1], Name[0] + Name[1] + "@foo.com", "654654654", SecurityUtility.passwordEncoder().encode("hajmola"),
                    true, GenerateRandomDate(),
                    Gender[ThreadLocalRandom.current().nextInt(0, 2)], UserFriendsID, uuid2.toString()));
            names.add(uuid2.toString());
        }
    }

    private void InitializeFeedPosts()
    {
        int numComments = multipleOfComments;

        for(int i = 0; i < MaxPosts; i++)
        {
            fparr[i] = new Post("AuthorID", GenerateRandomDate(), generateRandomPost(), 0, 0, numComments);
        }
    }

    private void InitializeComments()
    {
        for(int i = 0; i < MaxComments; i++)
        {
            pstcmnt[i] = new Comment(null, null, GenerateRandomDate(), generateRandomComment());
        }
    }

    private void InsertUserFriends(User usr)
    {
        Query query = new Query(new Criteria("id").is(usr.getId()));
        mongoOps.updateFirst(query, Update.update("userFriends", usr.getUserFriends()), User.class);
    }

    private void UpdateUsers()
    {
        if (mongoOps.collectionExists("Users"))
            mongoOps.dropCollection("Users");
        mongoOps.insert(users,User.class);
    }

    private List<User> GetUsersFromDB()
    {
        return mongoOps.findAll(User.class);
    }

    private void InsertPosts()
    {
        List<Post> posts = Arrays.asList(fparr);
        mongoOps.insert(posts,Post.class);
    }

    private void UpdatePosts()
    {
        if (mongoOps.collectionExists("Posts"))
            mongoOps.dropCollection("Posts");
        InsertPosts();
    }

    private void InsertComments()
    {
        List<Comment> comments = Arrays.asList(pstcmnt);
        mongoOps.insert(comments, Comment.class);
    }

    private void UpdateComments()
    {
        if (mongoOps.collectionExists("Comments"))
            mongoOps.dropCollection("Comments");
        InsertComments();
    }

    private void RenameFiles(List<String> names)
    {
        int Ind = 0;
        Path currentRelativePath = Paths.get("");
        String s = currentRelativePath.toAbsolutePath().toString();
        System.out.println("Current relative path is: " + s);
        File f = new File(s + "/images/");
        File[] filelist = f.listFiles();
        try
        {
            for(File fl : filelist)
            {
                if(fl.isFile())
                {
                    String fName = fl.getName();
                    String fNameSub = fName.substring(fName.length() - 4);
                    if (fNameSub.equals(".jpg"))
                    {
                        Path source  = Paths.get(s + "/images/" + fName);
                        Path target = Paths.get(s + "/images/" + names.get(Ind++) + ".jpg");
                        Files.move(source, target, StandardCopyOption.REPLACE_EXISTING);
                    }
                }
            }
        }
        catch (IOException e)
        {
            System.out.println("Error in RenameFiles " + e.toString());
        }
    }

    private void GenerateFriendIDs()
    {
		/*
		 * Generate friends according to the following pattern
		 *	A => B C D E F G H I J K L M N O P Q
			B => A C D E F G H I J K L M N O P Q
			C => A B D E F G H I J K L M N O P Q
			D => A B C E F G H I J K L M N O P Q
			E => A B C D F G H I J K L M N O P Q
			F => A B C D E G H I J K L M N O P Q
			G => A B C D E F H I J K L M N O P Q
			H => A B C D E F G I J K L M N O P Q
			I => A B C D E F G H J K L M N O P Q
			J => A B C D E F G H I K L M N O P Q
			K => A B C D E F G H I J L M N O P Q
			L => A B C D E F G H I J K M N O P Q
			M => A B C D E F G H I J K L N O P Q
			N => A B C D E F G H I J K L M O P Q
			O => A B C D E F G H I J K L M N P Q
			P => A B C D E F G H I J K L M N O Q
			Q => A B C D E F G H I J K L M N O P
			R =>
			S =>
			T =>  *
		 */

        String[] friends = {"BCDEFGHIJKLMNOPQ",	"ACDEFGHIJKLMNOPQ", "ABDEFGHIJKLMNOPQ", "ABCEFGHIJKLMNOPQ", "ABCDFGHIJKLMNOPQ", "ABCDEGHIJKLMNOPQ",
                "ABCDEFHIJKLMNOPQ", "ABCDEFGIJKLMNOPQ", "ABCDEFGHJKLMNOPQ", "ABCDEFGHIKLMNOPQ", "ABCDEFGHIJLMNOPQ", "ABCDEFGHIJKMNOPQ",
                "ABCDEFGHIJKLNOPQ", "ABCDEFGHIJKLMOPQ", "ABCDEFGHIJKLMNPQ", "ABCDEFGHIJKLMNOQ", "ABCDEFGHIJKLMNOP"};


        int i = 0, index = 0;
        List<Integer> list = new ArrayList<>();
        Set<String> userfriendslist = new HashSet<>();
        /*
         * The capital letters are converted to their ASCII code and subtracted from 65 to get an index into users array
         */
        for(String usr:friends)
        {
            byte[] indexes = usr.getBytes();
            list.clear();
            userfriendslist.clear();
            for(byte j:indexes)
            {
                index = j - 65;
                list.add(index);
                userfriendslist.add(users.get(index).getId());
            }
            users.get(i).RemoveAllFriends();
            users.get(i).setUserFriends(userfriendslist);
            InsertUserFriends(users.get(i));
            i++;
        }
    }

    private Date GenerateRandomDate()
    {
        int randYear = ThreadLocalRandom.current().nextInt(117, 118);
        int randMonth = ThreadLocalRandom.current().nextInt(0, 11);
        int randDay = ThreadLocalRandom.current().nextInt(1, 28);
        int randHour = ThreadLocalRandom.current().nextInt(0, 23);
        int randMinute = ThreadLocalRandom.current().nextInt(0, 59);
        int randSecond = ThreadLocalRandom.current().nextInt(0, 59);

        @SuppressWarnings("deprecation")
        Date date = new Date(randYear,randMonth,randDay,randHour,randMinute,randSecond);

        return date;
    }

    private String[] ReadDummyFile()
    {
        String[] result = null;
        String textfile = null;

        try
        {
            File resource = new ClassPathResource("/Dummytext.txt").getFile();
            textfile = new String(Files.readAllBytes(resource.toPath()));
            result = textfile.split(" ");
            return result;
        }
        catch (IOException e)
        {
            System.out.println(e.toString());
        }
        return  null;
    }

    private String generateRandomPost()
    {
        return generateRandomtext(LenOfPost);
    }

    private String generateRandomComment()
    {
        return generateRandomtext(LenOfComment);
    }

    private String generateRandomtext(int Len)
    {
        String result = filetext[ThreadLocalRandom.current().nextInt(1, 100)] + " ";
        for(int i = 0; i < Len; i++)
        {
            result = result + filetext[ThreadLocalRandom.current().nextInt(1, 100)] + " ";
        }
        return result;
    }

    private void LinkPostswithUsers()
    {
        int postIndex = 0;
        int j = 0;

        for(int i = 0; i < MaxUsers; i++)
        {
            while(j < multipleOfPosts)
            {
                fparr[postIndex].setAuthorID(users.get(i).getId());
                postIndex++;
                j++;
            }
            j = 0;
        }
    }

    private void LinkPostswithComments()
    {
        int userIndex = 0;
        int postIndex = 0;
        int friendArrayIndex = 0;
        int userIndexInc = multipleOfPosts * multipleOfComments;
        String[] friendsArray;

        friendsArray = users.get(userIndex).getUserFriends().toArray(new String[NoOfFriends]);

        for(int i = 0; i < MaxComments; i++)
        {
            if(i > 0)
            {
                if(i % multipleOfComments == 0)
                    postIndex++;
                if(i % userIndexInc == 0)
                {
                    userIndex++;
                    friendsArray = users.get(userIndex).getUserFriends().toArray(new String[NoOfFriends]);
                }
            }
            pstcmnt[i].setParentpostID(fparr[postIndex].getId());
            friendArrayIndex = ThreadLocalRandom.current().nextInt(0, 5);
            pstcmnt[i].setAuthorID(friendsArray[friendArrayIndex]);
        }
    }
}
