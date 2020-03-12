package com.friendbook.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
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
import org.springframework.session.web.http.HeaderHttpSessionStrategy;
import org.springframework.session.web.http.HttpSessionStrategy;

import com.friendbook.utility.SecurityUtility;
import com.friendbook.service.UserDetailsServiceImpl;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter
{
    //Allow access to the following without authentication
    private static final String[] PUBLIC_MATCHERS =
    {
            "/",
            "/checkemailavailability/**",
            "/checksession/**",
            "/actuator/**",
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

    @Autowired
    private CustomBasicAuthenticationEntryPoint authenticationEntryPoint;

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
        return new UserDetailsServiceImpl();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception
    {
        auth.userDetailsService(userDetailsService()).passwordEncoder(passwordEncoder());
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception
    {
        http.httpBasic().authenticationEntryPoint(authenticationEntryPoint)
                .and().authorizeRequests()
                .antMatchers(HttpMethod.POST, "/registernewuser/**").permitAll()
                .antMatchers(PUBLIC_MATCHERS).permitAll().anyRequest().authenticated()
                .and().csrf().ignoringAntMatchers("/registernewuser/**");

        //Prevent multiple logins with same userID password combination
        http.sessionManagement().maximumSessions(1).maxSessionsPreventsLogin(true).sessionRegistry(sessionRegistry());
    }

    @Bean
    public SessionRegistry sessionRegistry()//SessionRegistry is used for obtaining list of sessions including expired sessions
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
