package com.friendbook.repository.mongorepo;

import com.friendbook.model.Post;

import java.util.List;
import java.util.Set;

public interface PostRepository
{
    List<Post> getPostsOfFriends(Set<String> userFriends);
    void updateLikes(String postID);
    void updateDisLikes(String postID);
    void updateNumComments(String postID);
    List<Post> findByOwnerID(String OwnerID);
    Post getSinglePost(String postID);
    String insertPost(Post pst);
}
