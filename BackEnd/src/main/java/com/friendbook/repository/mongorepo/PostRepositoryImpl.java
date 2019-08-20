package com.friendbook.repository.mongorepo;

import com.friendbook.model.Post;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Set;

@Repository
public class PostRepositoryImpl implements PostRepository
{
    private final MongoTemplate mongoTemplate;

    @Autowired
    public PostRepositoryImpl(MongoTemplate mongoTemplate)
    {
        this.mongoTemplate = mongoTemplate;
    }

    @Override
    public String insertPost(Post pst)
    {
        mongoTemplate.insert(pst);
        return pst.getId();
    }

    @Override
    public List<Post> findByOwnerID(String OwnerID)
    {
        //pageNo starts from zero
        List<Post> fpl;
        Query query = new Query();
        query.addCriteria(Criteria.where("authorID").is(OwnerID));
        query.with(new Sort(Sort.Direction.DESC,"posttime"));
        query.limit(100);
        fpl = mongoTemplate.find(query, Post.class);
        if(fpl.isEmpty())
            return null;
        return fpl;
    }

    @Override
    public List<Post> getPostsOfFriends(Set<String> userFriends)
    {
        List<Post> fpl = new ArrayList<Post>();
        List<Post> fpltemp = new ArrayList<Post>();

        if ( userFriends.size() > 0 )
        {
            for(String usr : userFriends)
            {
                Query query = new Query();
                query.addCriteria(Criteria.where("authorID").is(usr));
                query.with(new Sort(Sort.Direction.DESC,"posttime"));
                query.limit(20);
                fpltemp = mongoTemplate.find(query, Post.class);
                if ( fpltemp.size() > 0 )
                    fpl.addAll(fpltemp);
            }
            Collections.shuffle(fpl);
        }
        return fpl;
    }

    @Override
    public void updateLikes(String postID)
    {
        Query query = new Query();
        query.addCriteria(Criteria.where("id").is(postID));
        mongoTemplate.updateFirst(query, new Update().inc("likes", 1), Post.class);
    }

    @Override
    public void updateDisLikes(String postID)
    {
        Query query = new Query();
        query.addCriteria(Criteria.where("id").is(postID));
        mongoTemplate.updateFirst(query, new Update().inc("dislikes", 1), Post.class);
    }

    @Override
    public void updateNumComments(String postID)
    {
        Query query = new Query();
        query.addCriteria(Criteria.where("id").is(postID));
        mongoTemplate.updateFirst(query, new Update().inc("numComments", 1), Post.class);
    }
}