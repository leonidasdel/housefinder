package com.leonidas.house.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface HouseRepository extends JpaRepository<HouseEntity, Long> {

    @Query(value = "SELECT * from houses",nativeQuery=true)
    List<HouseEntity> getAllProperties();
}
