package com.springboard.hackathongo.services;

import com.springboard.hackathongo.entities.Activity;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.Date;
import java.util.List;

@Service
public class AcivityService {
    public List<Activity> getUsersActivity(int userId){
        //depending on the userId we would return specific user's activities

        var acivity1 = new Activity(1, "Paper Work", new Date(2023,9,23),
                1, "for service 2 need to upload Hippa ...");

        var activity2 = new Activity(2, "Zoom", new Date(2023,9,22),
                1, "zoom link is: ....");

        var activity3 = new Activity(2, "Health", new Date(2023,9,28), 1,
                "Check into rehab");

        if(userId == 1)
            return Arrays.asList(acivity1);
        if(userId == 2)
            return Arrays.asList(activity2);
        if(userId == 3)
            return Arrays.asList(activity3);

        return Arrays.asList(new Activity());
    }
}
