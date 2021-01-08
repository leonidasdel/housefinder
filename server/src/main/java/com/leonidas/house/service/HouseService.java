package com.leonidas.house.service;

import com.leonidas.house.data.HouseEntity;
import com.leonidas.house.data.HouseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HouseService {

    @Autowired
    private final HouseRepository houseRepository;

    public HouseService(HouseRepository houseRepository) {
        this.houseRepository = houseRepository;
    }

    public List<HouseEntity> getHouses(){
        List<HouseEntity> houseEntity = houseRepository.getAllProperties();
        return  houseEntity;
    }
}
