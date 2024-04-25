package com.example.car.services.auth;

import com.example.car.dto.SignUpRequest;
import com.example.car.dto.UserDto;
import com.example.car.entity.User;

public interface AuthService {
    User createCustomer(SignUpRequest signUpRequest);
    Boolean hasCustomerWithEmail(String email);
}
