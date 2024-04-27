package com.example.car.controller;


import com.example.car.dto.AuthenticationRequest;
import com.example.car.dto.AuthenticationResponse;
import com.example.car.dto.SignUpRequest;
import com.example.car.dto.UserDto;
import com.example.car.entity.User;
import com.example.car.repository.UserRepository;
import com.example.car.services.auth.AuthService;
import com.example.car.services.jwt.UserService;
import com.example.car.utils.JwtUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AuthService authService;

    @PostMapping("/sign")
    public ResponseEntity<?> createUser(@RequestBody SignUpRequest signUpRequest){
        if (authService.hasCustomerWithEmail(signUpRequest.getEmail()))
           return  new ResponseEntity<>("email already exists",HttpStatus.NOT_ACCEPTABLE);
        User createdUserDto=authService.createCustomer(signUpRequest);
        if (createdUserDto == null)
            return new ResponseEntity<>("user not created", HttpStatus.BAD_REQUEST);
        return  new ResponseEntity<>(createdUserDto,HttpStatus.CREATED);

    }
    @PostMapping("/login")
public ResponseEntity<AuthenticationResponse> login(@RequestBody AuthenticationRequest authenticationRequest){
        return ResponseEntity.ok(authService.createAuthToken(authenticationRequest));
    }

}
