package com.example.car.services.auth;

import com.example.car.dto.AuthenticationRequest;
import com.example.car.dto.AuthenticationResponse;
import com.example.car.dto.SignUpRequest;
import com.example.car.dto.UserDto;
import com.example.car.entity.User;
import org.springframework.web.bind.annotation.RequestBody;

public interface AuthService {
    User createCustomer(SignUpRequest signUpRequest);
    AuthenticationResponse createAuthToken(@RequestBody AuthenticationRequest authenticationRequest);
    Boolean hasCustomerWithEmail(String email);
}
