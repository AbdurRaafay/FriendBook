package com.friendbook.utility;

import com.friendbook.model.User;
import com.redislabs.lettusearch.RediSearchClient;
import com.redislabs.lettusearch.RediSearchCommands;
import com.redislabs.lettusearch.StatefulRediSearchConnection;
import com.redislabs.lettusearch.search.Schema;
import com.redislabs.lettusearch.search.field.PhoneticMatcher;
import com.redislabs.lettusearch.search.field.TextField;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public final class RedisSearchUtility
{
    private static final String schemaName = "USERNAMES";

    private static RediSearchClient client;
    private static StatefulRediSearchConnection<String, String> conn;
    private static RediSearchCommands<String, String> ft;
    private static Schema SCHEMA;

    private void RedisSearchUtility() {}

    public static void initializeSearch()
    {
        client = RediSearchClient.create("redis://localhost");
        conn = client.connect();
        ft = conn.sync();
        SCHEMA = Schema.builder().field(TextField.builder().name("name").matcher(PhoneticMatcher.English).build()).build();
        ft.create(schemaName, SCHEMA);
    }

    public static void setupIndex(List<User> usrList)
    {
        for(User usr : usrList)
        {
            Map<String, String> userObject = new HashMap<>();
            userObject.put(usr.getId(), usr.getFirstName() + " " + usr.getLastName());
            ft.add(schemaName, usr.getId(),1, userObject);
        }
    }
}
