package com.friendbook.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

//This is only for loading the Angular frontend

@Controller
public class IndexController
{
    @RequestMapping("/")
    public String toplevel()
    {
        return "redirect:/index";
    }

    @RequestMapping("/index")
    public String index()
    {
        return "index.html";
    }

    @RequestMapping("/home")
    public String home()
    {
        return "redirect:/index";
    }

}