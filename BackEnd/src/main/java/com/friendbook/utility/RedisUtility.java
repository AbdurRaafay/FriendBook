package com.friendbook.utility;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.friendbook.model.Post;

import java.io.IOException;
import java.util.Map;

public final class RedisUtility
{
    private RedisUtility(){} //Singleton

    //https://github.com/FasterXML/jackson-docs/wiki/Presentation:-Jackson-Performance
    //This is done to ensure ObjectMapper is created only once
    private static final ObjectMapper mapper = new ObjectMapper().configure(JsonParser.Feature.ALLOW_UNQUOTED_FIELD_NAMES, true);

    public static Map<String, Object> createObjectFromString(String tmp, TypeReference typ)
    {
        try
        {
            return mapper.readValue(tmp, typ);
        }
        catch (JsonParseException e)
        {
            System.out.println("createObjectFromString JsonParseException " + e.toString());
        }
        catch (JsonMappingException e)
        {
            System.out.println("createObjectFromString JsonMappingException " + e.toString());
        }
        catch (IOException e)
        {
            System.out.println("createObjectFromString IOException " + e.toString());
        }
        return null;
    }

    public static String createStringFromObject(Map<String, Object> redisObject)
    {
        try
        {
            return mapper.writeValueAsString(redisObject);
        }
        catch (JsonProcessingException e)
        {
            System.out.println("createStringFromObject " + e.toString());
        }
        return null;
    }

    public static String createJsonFromPosts(Post pst)
    {
        try
        {
            return mapper.writeValueAsString(pst);
        }
        catch (JsonProcessingException e)
        {
            System.out.println("createJsonFromPosts " + e.toString());
        }
        return null;
    }
}
