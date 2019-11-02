package com.friendbook.config;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.www.BasicAuthenticationEntryPoint;
import org.springframework.stereotype.Component;

@Component
public class CustomBasicAuthenticationEntryPoint extends BasicAuthenticationEntryPoint
{
    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authEx)
            throws IOException, ServletException
    {
        System.out.println("CustomBasicAuthenticationEntryPoint called");
        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        PrintWriter writer = response.getWriter();
        writer.println("HTTP Status 401 - " + authEx.getMessage());
    }

    @Override
    public void afterPropertiesSet() throws Exception
    {
        setRealmName("FRIENDBOOK REALM");
        super.afterPropertiesSet();
    }
}
