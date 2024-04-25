package com.example.car.dto;

import com.example.car.enums.BookCarStatus;
import lombok.Data;

import java.util.Date;
@Data
public class BookCarDto {
    private Long id;
    private Date fromDate;
    private Date toDate;
    private Long price;
    private BookCarStatus bookCarStatus;
    private Long carId;
    private Long userId;
    private Long days;
    private String email;
    private String username;
}
