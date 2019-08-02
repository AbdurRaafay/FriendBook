package com.friendbook.repository.mongorepo;

import com.friendbook.model.Comment;

import java.util.List;

public interface CommentRepository
{
    List<Comment> findByParentPostID(String ParentPostID);
    void insert(Comment pc);
}
