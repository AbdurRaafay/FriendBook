package com.friendbook;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.friendbook.model.Post;
import com.friendbook.model.PostFrontEnd;
import com.friendbook.model.User;
import com.friendbook.repository.mongorepo.UserRepository;
import com.jayway.jsonpath.DocumentContext;
import com.jayway.jsonpath.JsonPath;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.security.web.FilterChainProxy;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.web.context.WebApplicationContext;

import javax.annotation.Resource;

import static org.hamcrest.Matchers.*;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.httpBasic;
import static org.springframework.security.test.web.servlet.setup.SecurityMockMvcConfigurers.springSecurity;
import static org.springframework.test.web.servlet.setup.MockMvcBuilders.webAppContextSetup;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;

@ExtendWith(SpringExtension.class)
@SpringBootTest(classes = {FriendbookApplication.class})
public class FriendbookApplicationTests
{
    @Autowired
    protected WebApplicationContext wac;

    @Resource
    private FilterChainProxy springSecurityFilterChain;

    private MockMvc mockMvc;

    @Autowired
    private UserRepository usrrep;

    @Autowired
    private MongoTemplate mongoTemplate;

    @BeforeEach
    public void applySecurity()
    {
        this.mockMvc = webAppContextSetup(wac)
                .apply(springSecurity(springSecurityFilterChain))
                .build();
    }

    @Test
    @WithMockUser(username = "JamesCameron@foo.com", password = "t1ng@m1ng@dIngd0ng", roles = "USER")
    public void testgetNewsFeed() throws Exception
    {
        MvcResult result = mockMvc.perform(get("/getnewsfeed")
                .accept(MediaType.APPLICATION_JSON)
                .with(httpBasic("JamesCameron@foo.com", "t1ng@m1ng@dIngd0ng")))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(10))).andReturn();
    }

    @Test
    @WithMockUser(username = "JamesCameron@foo.com", password = "t1ng@m1ng@dIngd0ng", roles = "USER")
    public void testgetComments() throws Exception
    {
        User usr = usrrep.findByEmail("JamesCameron@foo.com");
        Query query = new Query();
        query.addCriteria(Criteria.where("authorID").is(usr.getId()));
        Post pst = mongoTemplate.findOne(query, Post.class);
        mockMvc.perform(get("/getcomments/{PostID}", pst.getId())
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(5))).andReturn();
    }

    @Test
    @WithMockUser(username = "JamesCameron@foo.com", password = "t1ng@m1ng@dIngd0ng", roles = "USER")
    public void testgetFriendsList() throws Exception
    {
        MvcResult result = mockMvc.perform(get("/getfriendslist")
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(16))).andReturn();
    }

    @Test
    @WithMockUser(username = "JamesCameron@foo.com", password = "t1ng@m1ng@dIngd0ng", roles = "USER")
    public void testgetWallPosts() throws Exception
    {
        MvcResult result = mockMvc.perform(get("/getwallposts")
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(10))).andReturn();
        String content = result.getResponse().getContentAsString();
        DocumentContext jsonContext = JsonPath.parse(content);
        JsonPath jsonPath = JsonPath.compile("$[0]");//Get first element
        String pf = jsonContext.read(jsonPath);
        ObjectMapper mapper = new ObjectMapper().configure(JsonParser.Feature.ALLOW_UNQUOTED_FIELD_NAMES, true);
        PostFrontEnd postFrontObj = mapper.readValue(pf, new TypeReference<PostFrontEnd>(){});
        assertEquals(postFrontObj.getLikes(), 0);
        assertEquals(postFrontObj.getDislikes(), 0);
        assertEquals(postFrontObj.getNumComments(), 5);
    }

    @Test
    @WithMockUser(username = "JamesCameron@foo.com", password = "t1ng@m1ng@dIngd0ng", roles = "USER")
    public void testgetSinglePost() throws Exception
    {
        User usr = usrrep.findByEmail("MickyMouse@foo.com");
        Query query = new Query();
        query.addCriteria(Criteria.where("authorID").is(usr.getId()));
        Post pst = mongoTemplate.findOne(query, Post.class);

        MvcResult result = mockMvc.perform(get("/getsinglepost")
                .param("PostID", pst.getId())
                .param("NotUserID", usr.getId())
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andReturn();
        String content = result.getResponse().getContentAsString();
        DocumentContext jsonContext = JsonPath.parse(content);
        int numComments = jsonContext.read("$['numComments']");
        assertEquals(numComments, 5);
        int numLikes = jsonContext.read("$['likes']");
        assertEquals(numLikes, 0);
        int numDisLikes = jsonContext.read("$['dislikes']");
        assertEquals(numDisLikes, 0);
    }

    @Test
    @WithMockUser(username = "JamesCameron@foo.com", password = "t1ng@m1ng@dIngd0ng", roles = "USER")
    public void testgetFriendsStatus() throws Exception
    {
        MvcResult result = mockMvc.perform(get("/getfriendslist")
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andReturn();
    }

}