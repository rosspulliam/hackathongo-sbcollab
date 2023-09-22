package com.springboard.hackathongo.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Services {
    private int serviceType;
    private String url;
    private String enrolledAccounts;//long string on account pk's
    private String description;
    private String category;
    private int cabinNumber;
}
