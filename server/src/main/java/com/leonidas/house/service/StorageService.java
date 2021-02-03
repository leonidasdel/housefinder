package com.leonidas.house.service;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.leonidas.house.exceptions.StorageException;
import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.UUID;

@Service
public class StorageService {

    @Value("${do.spaces.access.bucket}")
    private String doSpaceBucket;

    String FOLDER = "files/";

    @Autowired
    AmazonS3 s3Client;





    private String path;

    public String uploadFile(MultipartFile file, UUID uuid) throws IOException {

            var fileExtension = FilenameUtils.getExtension(file.getOriginalFilename());

            String key = FOLDER + uuid + "." + fileExtension;
            saveImageToServer(file, key);
            file.getInputStream().close();

            return uuid + "." + fileExtension;

    }

    private void saveImageToServer(MultipartFile multipartFile, String key) throws IOException {
        ObjectMetadata metadata = new ObjectMetadata();
        metadata.setContentLength(multipartFile.getInputStream().available());
        if (multipartFile.getContentType() != null && !"".equals(multipartFile.getContentType())) {
            metadata.setContentType(multipartFile.getContentType());
        }
        s3Client.putObject(new PutObjectRequest(doSpaceBucket, key, multipartFile.getInputStream(), metadata)
                .withCannedAcl(CannedAccessControlList.PublicRead));

        multipartFile.getInputStream().close();

    }
}
