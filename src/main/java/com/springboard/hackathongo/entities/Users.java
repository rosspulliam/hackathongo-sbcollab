package com.springboard.hackathongo.entities;

import lombok.Data;

import java.util.Date;

@Data
public class Users {
    private int sqnId;
    private String role;
    private String enrollment;
    private String acceptance;
    private String userId;//log in
    private String passwd;
    private Date lastUpdated;
}
