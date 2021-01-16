package com.leonidas.house.service;

import com.leonidas.house.dto.UserDto;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserService extends UserDetailsService {
    UserDto createUser(UserDto userDetails);

    UserDto getUserDetailsByEmail(String email);
}
