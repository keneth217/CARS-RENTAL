package com.example.car.services.auth;

import com.example.car.dto.AuthenticationRequest;
import com.example.car.dto.AuthenticationResponse;
import com.example.car.dto.SignUpRequest;
import com.example.car.dto.UserDto;
import com.example.car.entity.User;
import com.example.car.enums.Role;
import com.example.car.repository.UserRepository;
import com.example.car.services.auth.AuthService;
import com.example.car.services.jwt.UserService;
import com.example.car.utils.JwtUtils;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {
    private final UserRepository userRepository;
    private final AuthenticationManager authenticationManager;
    private final UserService userService;
    private final JwtUtils jwtUtils;

    @PostConstruct
    public void createAdmin(){
        User adminAccount=userRepository.findByRole(Role.ADMIN);
        if (adminAccount==null){
            User newAdmin= new User();
            newAdmin.setName("keneth admin");
            newAdmin.setEmail("admin@test.com");
            newAdmin.setPassword(new BCryptPasswordEncoder().encode("admin"));
            newAdmin.setRole(Role.ADMIN);
            userRepository.save(newAdmin);
            System.out.println("new admin adding");
        }
    }

    @Override
    public User createCustomer(SignUpRequest signUpRequest) {
        System.out.println("adding user------------");
        User user=new User();
        user.setName(signUpRequest.getName());
        user.setEmail(signUpRequest.getEmail());
        user.setPassword(new BCryptPasswordEncoder().encode(signUpRequest.getPassword()));
        user.setRole(Role.CUSTOMER);
        User createdUser=userRepository.save(user);
        System.out.println("user added"+createdUser);
        System.out.println("user added"+user);
        UserDto userDto=new UserDto();
        userDto.setId(createdUser.getId());
        return user;
    }
    public AuthenticationResponse createAuthToken(@RequestBody AuthenticationRequest authenticationRequest)

    {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                    authenticationRequest.getEmail(),
                    authenticationRequest.getPassword()));
        } catch (RuntimeException e) {
            throw new RuntimeException("incorrect login credentials");
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

    @Override
    public Boolean hasCustomerWithEmail(String email) {
        return userRepository.findFirstByEmail(email).isPresent();
    }
}
