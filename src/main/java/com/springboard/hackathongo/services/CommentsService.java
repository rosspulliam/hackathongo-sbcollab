package com.springboard.hackathongo.services;

import com.springboard.hackathongo.entities.Comments;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class CommentsService {

    public List<Comments> getAllComments(int destinationId, int userId){
        if( userId == 3 && destinationId == 1){
            var comments1 = new Comments(1, 3, 1, 1,"You can start you dialog here...");
            var comments2 = new Comments(2, 3, 3, 1,"Okay thank you, I'll talk with service provider 3");
            var comments3 = new Comments(3, 3, 2, 1,"Hey how can I help?");

            return Arrays.asList(comments1,comments2,comments3);
        }


        return Arrays.asList(new Comments());
    }
}
