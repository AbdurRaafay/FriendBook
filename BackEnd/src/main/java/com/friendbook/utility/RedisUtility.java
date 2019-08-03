package com.friendbook.utility;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public final class RedisUtility
{
    private RedisUtility(){}

    public static Map<String, Object> createObjectFromString(String tmp)
    {
        ObjectMapper mapper = new ObjectMapper();
        mapper.configure(JsonParser.Feature.ALLOW_UNQUOTED_FIELD_NAMES, true);

        try
        {
            return mapper.readValue(tmp, new TypeReference<Map<String, Object>>(){});
        }
        catch (JsonParseException e)
        {

        }
        catch (JsonMappingException e)
        {

        }
        catch (IOException e)
        {

        }
        return null;
    }

    public static String createStringFromObject(Map<String, Object> redisObject)
    {
        ObjectMapper mapper = new ObjectMapper();
        try
        {
            return mapper.writeValueAsString(redisObject);
        }
        catch (JsonProcessingException e)
        {

        }
        return null;
    }

    public static String createStringFromObjectList(List<Map<String,Object>> redisObject)
    {
        ObjectMapper mapper = new ObjectMapper();
        try
        {
            return mapper.writeValueAsString(redisObject);
        }
        catch (JsonProcessingException e)
        {

        }
        return null;
    }

}
