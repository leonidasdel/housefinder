package com.leonidas.house.service;

import com.leonidas.house.data.HouseEntity;
import com.leonidas.house.data.HouseRepository;
import com.leonidas.house.data.HousesPicturesEntity;
import com.leonidas.house.model.HouseRequestModel;
import com.leonidas.house.model.HouseResponseModel;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.reflect.Type;
import java.util.List;

@Service
public class HouseService {

    ModelMapper modelMapper = new ModelMapper();

    @Autowired
    private final HouseRepository houseRepository;

    public HouseService(HouseRepository houseRepository) {
        this.houseRepository = houseRepository;
    }

    public List<HouseEntity> getHouses(){
        List<HouseEntity> houseEntity = houseRepository.getAllProperties();
        return  houseEntity;
    }

    public  List<HouseEntity> getHousesByCity(String city){
        List<HouseEntity> housesByCity = houseRepository.findByCity(city);
        return  housesByCity;
    }

    public void saveHouses(HouseRequestModel newHouse) {
        HouseEntity houseEntity = modelMapper.map(newHouse,HouseEntity.class);
        HousesPicturesEntity housesPicturesEntity = modelMapper.map(newHouse.getHouses_path(),HousesPicturesEntity.class);
        housesPicturesEntity.setHouseEntity(houseEntity);
        houseEntity.setHouses_path(housesPicturesEntity);
        houseRepository.save(houseEntity);
    }
}
