package com.friendbook;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(SpringExtension.class)
@SpringBootTest(classes = FriendbookApplication.class)
@AutoConfigureMockMvc
public class FriendbookApplicationTests
{
    @Autowired
    private MockMvc mockMvc;

    @Test
    @WithMockUser(username = "JamesCameron@foo.com", password = "hajmola", roles = "USER")
    public void testgetWallPosts() throws Exception
    {
        mockMvc.perform(MockMvcRequestBuilders.get("/getwallposts").accept(MediaType.ALL))
                .andExpect(status().isOk());
    }
}
