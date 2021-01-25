package com.leonidas.house.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.leonidas.house.data.HousesPicturesEntity;
import com.leonidas.house.exceptions.StorageException;
import com.leonidas.house.model.HousePictureRequestModel;
import com.leonidas.house.model.HousePictureResponseModel;
import com.leonidas.house.model.HouseRequestModel;
import com.leonidas.house.model.HouseResponseModel;
import com.leonidas.house.service.HouseService;
import com.leonidas.house.service.StorageService;
import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.UUID;

@RestController
@CrossOrigin("http://localhost:3000")
public class FileController {

    @Autowired
    private StorageService storageService;

    @Autowired
    private HouseService houseService;

    @PostMapping(value = "/put-house",
            consumes = {"multipart/form-data"})
    public String upload(@RequestParam MultipartFile file, @RequestParam String objArr) throws IOException {
        HouseRequestModel newHouse = new ObjectMapper().readValue(objArr, HouseRequestModel.class);
        System.out.println(newHouse.toString());
        UUID uuid = UUID.randomUUID();
        var fullName = storageService.uploadFile(file,uuid);
//        var fileName = file.getName();
//        var fileExtension = FilenameUtils.getExtension(fileName);
//        var fullName = uuid.toString() + fileExtension;
        System.out.println(file.getName());
        newHouse.setHouses_path(new HousePictureRequestModel(fullName));
        houseService.saveHouses(newHouse);
        return "redirect:/success.html";
    }

    @ExceptionHandler(StorageException.class)
    public String handleStorageFileNotFound(StorageException e) {

        return "redirect:/failure.html";

    }
}
