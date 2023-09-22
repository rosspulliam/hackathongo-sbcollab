package com.springboard.hackathongo.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Comments {

    private int id;
    private int serviceId;
    private int userId;
    private int destinationId;
    private String comment;
}
