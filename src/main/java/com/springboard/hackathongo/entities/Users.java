package com.springboard.hackathongo.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Users {
    private int id;
    private String role;
    private String enrollment;
    private String acceptance;
    private String userId;//log in
    private String passwd;
    private int accountId;
    private Date lastUpdated;
}
