package com.springboard.hackathongo.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Users {
    private int sqnId;
    private String role;
    private String enrollment;
    private String acceptance;
    private String userId;//log in
    private String passwd;
    private Date lastUpdated;
}
