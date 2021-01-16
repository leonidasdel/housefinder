package com.leonidas.house.controller;

import com.leonidas.house.dto.UserDto;
import com.leonidas.house.model.CreateUserRequestModel;
import com.leonidas.house.service.UserServiceImpl;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
@CrossOrigin("http://localhost:3000")
public class UserController {


    private UserServiceImpl userService;


    @Autowired
    public  UserController(UserServiceImpl userService){
        this.userService= userService;
    }

    @PostMapping
    public ResponseEntity<UserDto> createUser(@RequestBody
    CreateUserRequestModel user){
        ModelMapper modelMapper = new ModelMapper();
        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);

        UserDto userDto = modelMapper.map(user,UserDto.class);
            UserDto   userDetails  =   userService.createUser(userDto);

        return new ResponseEntity(userDetails,HttpStatus.OK);
    }

}
