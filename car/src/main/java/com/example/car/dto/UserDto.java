package com.example.car.dto;

import com.example.car.enums.Role;
import lombok.Data;

@Data
public class UserDto {
    private Long id;
    private String name;
    private String email;
    private String password;
    private Role role;
}
