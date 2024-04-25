package com.example.car.services.auth;

import com.example.car.dto.SignUpRequest;
import com.example.car.dto.UserDto;
import com.example.car.entity.User;
import com.example.car.enums.Role;
import com.example.car.repository.UserRepository;
import com.example.car.services.auth.AuthService;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {
    private final UserRepository userRepository;
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

    @Override
    public Boolean hasCustomerWithEmail(String email) {
        return userRepository.findFirstByEmail(email).isPresent();
    }
}
