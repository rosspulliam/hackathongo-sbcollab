package com.springboard.hackathongo.services;

import com.springboard.hackathongo.entities.Users;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.Date;
import java.util.List;

@Service
public class UsersService {

    public List<Users> getAllUsers(){
        var user1 = new Users(1,"admin","1,2,3","1,2,3","adminLogin","adminPass",1, new Date());
        var user2 = new Users(2,"service","1", "1","","",2, new Date());
        var user3 = new Users(3,"user","2,3", "2", "","", 3, new Date());

        return Arrays.asList(user1,user2,user3);
    }

    public Users getUser(int id){
        var user1 = new Users(1,"admin","1,2,3","1,2,3","adminLogin","adminPass",1, new Date());
        var user2 = new Users(2,"service","1", "1","","",2, new Date());
        var user3 = new Users(3,"user","2,3", "2", "","", 3, new Date());
        if(user1.getId() == id)
            return user1;
        if(user2.getId() == id)
            return user2;
        if(user3.getId() == id)
            return user2;

        return null;
    }
}
