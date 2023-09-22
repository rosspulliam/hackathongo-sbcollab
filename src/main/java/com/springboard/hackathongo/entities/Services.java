package com.springboard.hackathongo.entities;

import lombok.Data;

@Data
public class Services {
    private int serviceType;
    private String url;
    private String enrolled;
    private String description;
    private String category;
    private int cabinNumber;
}
