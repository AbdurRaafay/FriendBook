package com.friendbook.service;

import com.friendbook.model.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User.UserBuilder;

import com.friendbook.repository.mongorepo.UserRepository;

@Service
public class UserDetailsServiceImp implements UserDetailsService
{

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException
    {
        UserBuilder builder = null;

        User user = userRepository.findByEmail(username);
        if(null == user)
        {
            throw new UsernameNotFoundException("Username "+username+" not found");
        }
        else
        {
            builder = org.springframework.security.core.userdetails.User.withUsername(user.getEmail());
            builder.password(user.getPassword());
            builder.roles("USER");
            return builder.build();
        }
    }
}