package com.springboard.hackathongo.repository;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBSaveExpression;
import com.amazonaws.services.dynamodbv2.model.AttributeValue;
import com.amazonaws.services.dynamodbv2.model.ExpectedAttributeValue;
import com.springboard.hackathongo.entities.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UsersRepository {

    @Autowired
    private DynamoDBMapper dynamoDBMapper;


    public Users save(Users users) {
        dynamoDBMapper.save(users);
        return users;
    }

    public Users getEmployeeById(String usersIds) {
        return dynamoDBMapper.load(Users.class, usersIds);
    }

    public String delete(String usersIds) {
        Users emp = dynamoDBMapper.load(Users.class, usersIds);
        dynamoDBMapper.delete(emp);
        return "Users Deleted!";
    }

    public String update(String usersIds, Users users) {
        dynamoDBMapper.save(users,
                new DynamoDBSaveExpression()
                        .withExpectedEntry("usersIds",
                                new ExpectedAttributeValue(
                                        new AttributeValue().withS(usersIds)
                                )));
        return usersIds;
    }
}
