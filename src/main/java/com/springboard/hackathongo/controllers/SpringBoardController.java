package com.springboard.hackathongo.controllers;

import com.springboard.hackathongo.entities.Account;
import com.springboard.hackathongo.entities.Activity;
import com.springboard.hackathongo.entities.Services;
import com.springboard.hackathongo.entities.Users;
import com.springboard.hackathongo.services.AccountService;
import com.springboard.hackathongo.services.AcivityService;
import com.springboard.hackathongo.services.ServicesTableService;
import com.springboard.hackathongo.services.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SpringBoardController {
    @Autowired
    AccountService accountService;

    @Autowired
    AcivityService acivityService;

    @Autowired
    ServicesTableService service;

    @Autowired
    UsersService usersService;

    @GetMapping("/accounts")
    public List<Account> getAllAccounts(){
        return accountService.getAllAccounts();
    }

    @GetMapping("/getActivity")
    public List<Activity> getAllActivites(@RequestParam int id){
        return acivityService.getUsersActivity(id);
    }

    @GetMapping("/getServices")
    public List<Services> getAllServices(){
        return service.getAllServices();
    }

    @GetMapping("/allUsers")
    public List<Users> getAllUsers(){
        return usersService.getAllUsers();
    }

    @GetMapping("/getUser")//not working
    public Users getUser(@RequestParam int id){
        return usersService.getUser(id);
    }
}

