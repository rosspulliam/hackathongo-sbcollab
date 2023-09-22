package com.springboard.hackathongo.entities;

import lombok.Data;

import java.util.Date;

@Data
public class Activity {
    private int id;
    private String activityFeed;
    private Date date;
    private int sqnId;
    private String description;
}
