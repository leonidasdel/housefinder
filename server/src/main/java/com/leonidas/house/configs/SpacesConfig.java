package com.leonidas.house.configs;

import com.amazonaws.regions.Regions;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.client.builder.AwsClientBuilder.EndpointConfiguration;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;

@Configuration
public class SpacesConfig {

    @Value("${do.spaces.access.key}")
    private String doSpaceKey;

    @Value("${do.spaces.access.secret}")
    private String doSpaceSecret;

    @Value("${do.spaces.access.endpoint}")
    private String doSpaceEndpoint;

    @Value("${do.spaces.access.region}")
    private String doSpaceRegion;

    @Bean
    public AmazonS3 getCredentials() {
        BasicAWSCredentials creds = new BasicAWSCredentials(doSpaceKey, doSpaceSecret);
        return AmazonS3ClientBuilder
                .standard()
                .withCredentials(new AWSStaticCredentialsProvider(creds))
                .withRegion(Regions.EU_CENTRAL_1)
                .build();
//        return AmazonS3ClientBuilder.standard()
//                .withEndpointConfiguration(new EndpointConfiguration(doSpaceEndpoint, doSpaceRegion))
//                .withCredentials(new AWSStaticCredentialsProvider(creds)).build();
    }

}
