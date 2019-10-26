package com.friendbook;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(SpringExtension.class)
@SpringBootTest(classes = FriendbookApplication.class)
@AutoConfigureMockMvc
public class FriendbookApplicationTests
{
    @Autowired
    private MockMvc mockMvc;

    @Autowired
    ObjectMapper objectMapper;

    @Test
    @WithMockUser(username = "JamesCameron@foo.com", password = "hajmola", roles = "USER")
    public void testgetWallPosts() throws Exception
    {
        MvcResult result = mockMvc.perform(MockMvcRequestBuilders.get("/getwallposts").accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andReturn();
        String content = result.getResponse().getContentAsString();
        JsonNode jsonNode = objectMapper.readTree(content);
        System.out.println(jsonNode);
    }
}