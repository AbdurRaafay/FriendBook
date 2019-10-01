package com.friendbook.utility;

import com.friendbook.model.User;
import me.xdrop.fuzzywuzzy.FuzzySearch;
import me.xdrop.fuzzywuzzy.model.ExtractedResult;

import java.util.ArrayList;
import java.util.List;

public final class NamesSearchUtility
{
    private NamesSearchUtility(){}

    private static List<String> userNames = new ArrayList<>();

    public static void setupUserNames(List<User> usrList)
    {
        usrList.forEach(user -> userNames.add(user.getImageFileID() + ":" + user.getFirstName() + " " + user.getLastName()));
    }

    public static List<ExtractedResult> getSearchResults(String searchTerm)
    {
        return FuzzySearch.extractAll(searchTerm, userNames);
    }
}
