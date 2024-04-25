package com.example.car.entity;

import com.example.car.dto.CarDto;
import com.example.car.repository.CarRepository;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Data
@Table(name="cars")
public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String transmission;
    private String brand;
    private String name;
    private String color;
    private String type;
    private String description;
    private Long price;
    private Date year;
    @Column(columnDefinition = "longblob")
    private byte[] image;

    public CarDto getCarDto() {
        CarDto carDto=new CarDto();
        carDto.setId(id);
        carDto.setName(name);
        carDto.setColor(color);
        carDto.setType(type);
        carDto.setYear(year);
        carDto.setDescription(description);
        carDto.setTransmission(transmission);
        carDto.setBrand(brand);
        carDto.setPrice(price);
        carDto.setReturnedImage(image);
        return carDto;
    }
}
