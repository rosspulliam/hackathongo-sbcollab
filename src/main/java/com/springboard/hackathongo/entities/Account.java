package com.springboard.hackathongo.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigInteger;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Account {
    private int id;
    private int cabinNumber;
    private Long phone;
    private String services;
    private Date dob;
    private String firstName;
    private String lastName;
    private String provider;
    private String case_mgr;
    private String need;
}
