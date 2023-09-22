package com.springboard.hackathongo.services;

import com.springboard.hackathongo.entities.Services;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class ServicesTableService {

    public List<Services> getAllServices(){
        var service1 = new Services(1,"http://google.com", "1,2",
                "use google to search stuff", "education", 40);

        var service2 = new Services(2,"http://healthSomething.com", "3",
                "health stuff", "education", 39);

        var service3 = new Services(3,"http://citi.com", "1,3",
                "need help creating account for banking", "bank", 38);

        return Arrays.asList(service1,service2,service3);
    }
}
