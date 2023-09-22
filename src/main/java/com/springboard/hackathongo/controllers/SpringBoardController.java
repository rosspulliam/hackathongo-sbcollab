package com.springboard.hackathongo.controllers;

import com.springboard.hackathongo.entities.*;
import com.springboard.hackathongo.services.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
public class SpringBoardController {
    @Autowired
    AccountService accountService;

    @Autowired
    AcivityService acivityService;

    @Autowired
    ServicesTableService service;

    @Autowired
    UsersService usersService;

    @Autowired
    CommentsService commentsService;

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

    @GetMapping("/getUser")
    public Users getUser(@RequestParam int id){
        return usersService.getUser(id);
    }

    @GetMapping("/getUserComments")
    public List<Comments> getUsersComments(@RequestParam int destinationId, @RequestParam int userId){
        return commentsService.getAllComments(destinationId,userId);
    }
}

