package com.leonidas.house.controller;

import com.leonidas.house.data.HouseEntity;
import com.leonidas.house.model.HouseResponseModel;
import com.leonidas.house.service.HouseService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.lang.reflect.Type;
import java.util.List;

@RestController
@RequestMapping("/houses")
public class HouseController {

        private final HouseService houseService;

        @Autowired
        public HouseController(final HouseService houseService){
            this.houseService = houseService;
        }
// CHANGE HOUSE ENTITYT TO HOUSE RESPONSE MODEL
        @GetMapping
        public ResponseEntity<HouseResponseModel> getAll() {
            ModelMapper modelMapper = new ModelMapper();
            modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);

            List<HouseEntity> houseEntity = houseService.getHouses();
            Type listType = new TypeToken<List<HouseResponseModel>>(){}.getType();
            List<HouseResponseModel> houseResponseModel = modelMapper.map(houseEntity,listType);


            return   new ResponseEntity(houseResponseModel, HttpStatus.OK);
        }
}
