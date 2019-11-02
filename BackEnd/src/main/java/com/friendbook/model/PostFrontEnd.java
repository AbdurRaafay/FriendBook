package com.friendbook.model;

import java.util.Date;

public class PostFrontEnd//Class for transferring Post data to the frontend as json
{
    private String id;
    private Date posttime;
    private String posttext;
    private long likes;
    private long dislikes;
    private long numComments;
    private boolean locklikesdislikes;
    private String fullName;
    private String imgPath;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Date getPosttime() {
        return posttime;
    }

    public void setPosttime(Date posttime) {
        this.posttime = posttime;
    }

    public String getPosttext() {
        return posttext;
    }

    public void setPosttext(String posttext) {
        this.posttext = posttext;
    }

    public long getLikes() {
        return likes;
    }

    public void setLikes(long likes) {
        this.likes = likes;
    }

    public long getDislikes() {
        return dislikes;
    }

    public void setDislikes(long dislikes) {
        this.dislikes = dislikes;
    }

    public long getNumComments() {
        return numComments;
    }

    public void setNumComments(long numComments) {
        this.numComments = numComments;
    }

    public boolean isLocklikesdislikes() {
        return locklikesdislikes;
    }

    public void setLocklikesdislikes(boolean locklikesdislikes) {
        this.locklikesdislikes = locklikesdislikes;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getImgPath() {
        return imgPath;
    }

    public void setImgPath(String imgPath) {
        this.imgPath = imgPath;
    }

    public PostFrontEnd() {}//Just to satisfy Jackson deserialization

    public PostFrontEnd(String id, Date posttime, String posttext, long likes,
                        long dislikes, long numComments, boolean locklikesdislikes, String fullName, String imgPath)
    {
        this.id = id;
        this.posttime = posttime;
        this.posttext = posttext;
        this.likes = likes;
        this.dislikes = dislikes;
        this.numComments = numComments;
        this.locklikesdislikes = locklikesdislikes;
        this.fullName = fullName;
        this.imgPath = imgPath;
    }
}
