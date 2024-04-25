package com.example.car.services.customer;

import com.example.car.dto.BookCarDto;
import com.example.car.dto.CarDto;
import com.example.car.dto.CarDtoListDto;
import com.example.car.dto.SearchDto;

import java.util.List;

public interface CustomerService {
    List<CarDto> getAllCars();
    boolean BookCar(Long carId, BookCarDto bookCarDto);

    CarDto getCarById(Long id);

    List<BookCarDto> getBookingByUserId(Long userId);

    CarDtoListDto searchCar(SearchDto searchDto);
}
