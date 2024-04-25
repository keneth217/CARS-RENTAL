package com.example.car.dto;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.util.Date;

@Data
public class CarDto {
    private Long id;
    private String transmission;
    private String brand;
    private String name;
    private String color;
    private String type;
    private String description;
    private Long price;
    private Date year;
    private MultipartFile image;
    private byte[] returnedImage;
}
