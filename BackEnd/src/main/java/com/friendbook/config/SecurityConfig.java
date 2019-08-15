package com.friendbook.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.firewall.DefaultHttpFirewall;
import org.springframework.security.web.firewall.HttpFirewall;
import org.springframework.security.core.session.SessionRegistry;
import org.springframework.security.core.session.SessionRegistryImpl;
import org.springframework.security.core.userdetails.UserDetailsService;

import com.friendbook.service.UserDetailsServiceImp;
import com.friendbook.utility.SecurityUtility;
import org.springframework.session.web.http.HeaderHttpSessionStrategy;
import org.springframework.session.web.http.HttpSessionStrategy;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter
{

    private static final String[] PUBLIC_MATCHERS =
            {
                    "/",
                    "/index",
                    "/index.html",
                    "/scripts.js",
                    "/*.js",
                    "/*.js.map",
                    "/*.css",
                    "/*.ico",
                    "/icons/*.svg",
                    "/assets/images/*.jpg",
            };

    private BCryptPasswordEncoder passwordEncoder()
    {
        return SecurityUtility.passwordEncoder();
    }

//	@Bean
//	public HttpFirewall allowUrlEncodedSlashHttpFirewall()
//	{
//	    StrictHttpFirewall firewall = new StrictHttpFirewall();
//	    firewall.setAllowUrlEncodedSlash(true);
//	    return firewall;
//	}

    @Bean
    public HttpFirewall defaultHttpFirewall()
    {
        return new DefaultHttpFirewall();
    }

    @Bean
    public UserDetailsService userDetailsService()
    {
        return new UserDetailsServiceImp();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception
    {
        auth.userDetailsService(userDetailsService()).passwordEncoder(passwordEncoder());
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception
    {
        http.httpBasic().and().authorizeRequests().antMatchers(PUBLIC_MATCHERS).permitAll().anyRequest().authenticated();
        http.sessionManagement().maximumSessions(1).maxSessionsPreventsLogin(true).sessionRegistry(sessionRegistry());
    }

    @Bean
    public SessionRegistry sessionRegistry()
    {
        SessionRegistry sessionRegistry = new SessionRegistryImpl();
        return sessionRegistry;
    }

    @Bean
    public HttpSessionStrategy httpSessionStrategy()
    {
        return new HeaderHttpSessionStrategy();
    }
}