package com.leonidas.house.service;

import com.leonidas.house.exceptions.StorageException;
import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.UUID;

@Service
public class StorageService {

    @Value("${upload.path}")
    private String path;

    public String uploadFile(MultipartFile file, UUID uuid) {

        if (file.isEmpty()) {

            throw new StorageException("Failed to store empty file");
        }

        try {
            var fileName = file.getName();
            var fileExtension = FilenameUtils.getExtension(file.getOriginalFilename());

            var is = file.getInputStream();

            Files.copy(is, Paths.get(path + uuid + "." + fileExtension),
                    StandardCopyOption.REPLACE_EXISTING);
            return uuid + "." + fileExtension;
        } catch (IOException e) {

            var msg = String.format("Failed to store file %f", file.getName());

            throw new StorageException(msg, e);
        }
    }
}
