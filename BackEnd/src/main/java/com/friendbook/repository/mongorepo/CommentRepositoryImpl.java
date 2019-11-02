package com.friendbook.repository.mongorepo;

import com.friendbook.model.Comment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CommentRepositoryImpl implements CommentRepository
{
    @Autowired
    private MongoTemplate mongoTemplate;

    @Override
    public List<Comment> findByParentPostID(String ParentPostID)
    {
        List<Comment> fpc;

        Query query = new Query();
        query.addCriteria(Criteria.where("parentpostID").is(ParentPostID));
        query.with(new Sort(Sort.Direction.DESC,"posttime"));
        query.limit(50);
        fpc = mongoTemplate.find(query, Comment.class);

        return fpc;
    }

    @Override
    public void insert(Comment pc)
    {
        mongoTemplate.insert(pc);
    }
}