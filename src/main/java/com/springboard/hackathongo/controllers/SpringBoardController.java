package com.springboard.hackathongo.controllers;

import com.springboard.hackathongo.entities.Account;
import com.springboard.hackathongo.services.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SpringBoardController {
    @Autowired
    AccountService accountService;

    @GetMapping("/accounts")
    public List<Account> getAllAccounts(){
        return accountService.getAllAccounts();
    }
}
