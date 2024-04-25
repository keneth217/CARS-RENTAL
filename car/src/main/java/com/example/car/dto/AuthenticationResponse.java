package com.example.car.dto;

import com.example.car.enums.Role;
import lombok.Data;

@Data
public class AuthenticationResponse {
    private String jwt;
    private String userId;
    private Role role;
    private String  userName;
}
