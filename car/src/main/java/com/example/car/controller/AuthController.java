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
    private final AuthenticationManager authenticationManager;
    private final UserService userService;
    private final JwtUtils jwtUtils;
    private final UserRepository userRepository;
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
    public AuthenticationResponse createAuthToken(@RequestBody AuthenticationRequest authenticationRequest) throws
            BadCredentialsException,
            UsernameNotFoundException,
            DisabledException
    {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                    authenticationRequest.getEmail(),
                    authenticationRequest.getPassword()));
        } catch (BadCredentialsException e) {
            throw new BadCredentialsException("incorrect login credentials");
        }
        final UserDetails userDetails=userService.userDetailsService()
                .loadUserByUsername(authenticationRequest.getEmail());
        Optional<User> optionalUser=userRepository.findFirstByEmail(authenticationRequest.getEmail());
        final String jwt=jwtUtils.generateToken(userDetails.getUsername());
        AuthenticationResponse authenticationResponse= new AuthenticationResponse();
        if (optionalUser.isPresent()){
            authenticationResponse.setJwt(jwt);
            authenticationResponse.setUserId(String.valueOf(optionalUser.get().getId()));
            authenticationResponse.setRole(optionalUser.get().getRole());
            authenticationResponse.setUserName(optionalUser.get().getName());
        }
        return authenticationResponse;
    }

}
