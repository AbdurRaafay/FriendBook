package com.friendbook.model;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "Users")
public class User
{
    @Id
    private String id;

    @Field
    private String firstName;

    @Field
    private String lastName;

    @Indexed
    @Field
    private String email;

    @Field
    private String phone;

    @Field
    private String password;

    @Field
    private boolean enabled = true;

    @Field
    private Date birthDate;

    @Field
    private String gender;

    @Field
    Set<String> userFriends = new HashSet<String>();

    @Field
    private String imageFileID;

    public String getId()
    {
        return id;
    }

    public String getFirstName()
    {
        return firstName;
    }

    public void setFirstName(String firstName)
    {
        this.firstName = firstName;
    }

    public String getLastName()
    {
        return lastName;
    }

    public void setLastName(String lastName)
    {
        this.lastName = lastName;
    }

    public String getEmail()
    {
        return email;
    }

    public void setEmail(String email)
    {
        this.email = email;
    }

    public String getPhone()
    {
        return phone;
    }

    public void setPhone(String phone)
    {
        this.phone = phone;
    }

    public String getPassword()
    {
        return password;
    }

    public void setPassword(String password)
    {
        this.password = password;
    }

    public boolean isEnabled()
    {
        return enabled;
    }

    public void setEnabled(boolean enabled)
    {
        this.enabled = enabled;
    }

    public Date getBirthDate()
    {
        return birthDate;
    }

    public void setBirthDate(Date birthDate)
    {
        this.birthDate = birthDate;
    }

    public String getGender()
    {
        return gender;
    }

    public void setGender(String gender)
    {
        this.gender = gender;
    }

    public Set<String> getUserFriends()
    {
        return userFriends;
    }

    public void setUserFriends(Set<String> userFriends)
    {
        this.userFriends.addAll(userFriends);
    }

    public void setUserFriend(String userFriends)
    {
        this.userFriends.add(userFriends);
    }

    public void RemoveAllFriends()
    {
        this.userFriends.clear();
    }

    public boolean isFriend(String friendID)
    {
        return this.userFriends.contains(friendID);
    }

    public void RemoveFriend(String friendID)
    {
        if (isFriend(friendID))
            this.userFriends.remove(friendID);
    }

    public int getFriendCount()
    {
        return this.userFriends.size();
    }

    public String getImageFileID()
    {
        return imageFileID;
    }

    public void setImageFileID(String imageFileID)
    {
        this.imageFileID = imageFileID;
    }

    public User(String firstName, String lastName, String email, String phone, String password, boolean enabled, Date birthDate, String gender,
                Set<String> userFriends, String imageFileID)
    {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.password = password;
        this.enabled = enabled;
        this.birthDate = birthDate;
        this.gender = gender;
        this.userFriends = userFriends;
        this.imageFileID = imageFileID;
    }

    public User(String firstName, String lastName, String email, String phone, String password, Date birthDate, String gender)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.password = password;
        this.birthDate = birthDate;
        this.gender = gender;
    }

    @Override
    public String toString()
    {
        return "User [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + email
                + ", phone=" + phone + ", password=" + password + ", enabled=" + enabled + ", birthDate=" + birthDate
                + ", gender=" + gender + ", userFriends=" + userFriends + ", imageFileID=" + imageFileID + "]";
    }
}