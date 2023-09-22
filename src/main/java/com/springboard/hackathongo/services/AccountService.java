package com.springboard.hackathongo.services;

import com.springboard.hackathongo.entities.Account;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.Date;
import java.util.List;

@Service
public class AccountService {

    public List<Account> getAllAccounts(){
        var account1 = new Account(1,40,9853348723L,"1,2,9", new Date(1993, 10, 11),
                "Joey", "Elmblad", "Provider 1", "Sherly Temple", "I need help with drug abuse");
        var account2 = new Account(2,39,5983341423L,"3,9", new Date(2000,2,20),
                "Billy", "Johnson", "Provider 2", "Amanda Richardson", "need help with banking");
        var account3 = new Account(3,38,5673346923L,"7", new Date(2016, 10, 10),
                "Bob", "Grant", "Provider 3", "Nikko Fisher", "need help getting personal documents");


        return Arrays.asList(account1,account2,account3);
    }
}