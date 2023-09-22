package com.springboard.hackathongo.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Activity {
    private int id;
    private String activityFeed;
    private Date date;
    private int sqnId;
    private String description;
}
