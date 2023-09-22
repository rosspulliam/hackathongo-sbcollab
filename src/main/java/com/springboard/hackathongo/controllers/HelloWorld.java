package com.springboard.hackathongo.controllers;

import java.util.*;

import com.springboard.hackathongo.entities.Account;
import org.springframework.web.bind.annotation.CrossOrigin;
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.dynamodb.DynamoDbClient;
import software.amazon.awssdk.services.dynamodb.model.*;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.ListObjectsRequest;
import software.amazon.awssdk.services.s3.model.ListObjectsResponse;
import software.amazon.awssdk.services.s3.model.S3Object;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class HelloWorld {

    Region region = Region.US_EAST_1;
    String bucketName = "bucket-hackathongo-bucket";

    // ProfileCredentialsProvider credentialsProvider = ProfileCredentialsProvider.create();
    S3Client s3 = S3Client.builder()
            .region(region)
            //  .credentialsProvider(credentialsProvider)
            .build();




    DynamoDbClient ddb = DynamoDbClient.builder()
            // .credentialsProvider(credentialsProvider)
            .region(region)
            .build();





    @GetMapping("/")
    public String index() {
        String s = "Hello CITI Teams from AWS App Runner. The JDK version is " + System.getProperty("java.version");
        return s;
    }

    @GetMapping("/s3")
    public List<String> GetObject() {
//    	return "Hello S3";
        ListObjectsRequest listObjects = ListObjectsRequest
                .builder()
                .bucket(bucketName)
                .build();

        ListObjectsResponse res = s3.listObjects(listObjects);
        List<S3Object> objects = res.contents();
        List<String> objectsStr = new ArrayList<String>();
        for (S3Object myValue : objects) {
            objectsStr.add(myValue.key());
        }
        return objectsStr;
    }

    @GetMapping("/ddb")
    public List<Map<String, AttributeValue>> GetItem() {
        String tableName = "account";
        String partitionAlias = "#a";
        String partitionKeyName = "account_id";
        String partitionKeyVal = "1";

    	  // Set up an alias for the partition key name in case it's a reserved word.
        HashMap<String,String> attrNameAlias = new HashMap<String,String>();
        attrNameAlias.put(partitionAlias, partitionKeyName);

        // Set up mapping of the partition name with the value.
        HashMap<String, AttributeValue> attrValues = new HashMap<>();

        attrValues.put(":"+partitionKeyName, AttributeValue.builder()
            .s(partitionKeyVal)
            .build());

        QueryRequest queryReq = QueryRequest.builder()
            .tableName(tableName)
            .keyConditionExpression(partitionAlias + " = :" + partitionKeyName)
            .expressionAttributeNames(attrNameAlias)
            .expressionAttributeValues(attrValues)
            .build();

            QueryResponse resp = ddb.query(queryReq);
            System.out.println(resp.count());
        ListTablesResponse response = null;
        ListTablesRequest request = ListTablesRequest.builder().build();
        response = ddb.listTables(request);


        return resp.items();
    }
}