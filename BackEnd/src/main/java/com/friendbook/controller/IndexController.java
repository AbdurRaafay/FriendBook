package com.friendbook.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

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