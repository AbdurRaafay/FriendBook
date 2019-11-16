package com.friendbook.config;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.www.BasicAuthenticationEntryPoint;
import org.springframework.stereotype.Component;

//We need this so that the browser DOES NOT display the enter password dialog box, instead the 401 response is returned as
//json
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
