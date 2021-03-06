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
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.lang.reflect.Type;
import java.util.List;

@RestController
@RequestMapping("/houses")
@CrossOrigin("http://localhost:3000")
public class HouseController {

        private final HouseService houseService;

        @Autowired
        public HouseController(final HouseService houseService){
            this.houseService = houseService;
        }
// CHANGE HOUSE ENTITYT TO HOUSE RESPONSE MODEL
        @GetMapping("/all")
        public ResponseEntity<HouseResponseModel> getAll() {
            ModelMapper modelMapper = new ModelMapper();
            modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
//
       List<HouseEntity> houseEntity = houseService.getHouses();
            Type listType = new TypeToken<List<HouseResponseModel>>(){}.getType();
            List<HouseResponseModel> houseResponseModel = modelMapper.map(houseEntity,listType);


            return   new ResponseEntity(houseResponseModel, HttpStatus.OK);
        }

        @GetMapping
        public ModelAndView getHouses(){
            ModelAndView modelAndView = new ModelAndView();
            modelAndView.setViewName("index.html");
            return modelAndView;
        }

        @GetMapping("/{city}")
        public ResponseEntity<HouseResponseModel> getByCity(@PathVariable String city) {
            ModelMapper modelMapper = new ModelMapper();
            modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);

            List<HouseEntity> housesByCity = houseService.getHousesByCity(city);

            Type listType = new TypeToken<List<HouseResponseModel>>(){}.getType();
            List<HouseResponseModel> houseResponseModel = modelMapper.map(housesByCity,listType);


            return   new ResponseEntity(houseResponseModel, HttpStatus.OK);

        }
}
