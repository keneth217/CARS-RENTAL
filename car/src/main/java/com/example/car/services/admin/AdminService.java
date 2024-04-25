package com.example.car.services.admin;

import com.example.car.dto.BookCarDto;
import com.example.car.dto.CarDto;
import com.example.car.dto.CarDtoListDto;
import com.example.car.dto.SearchDto;
import com.example.car.entity.User;

import java.io.IOException;
import java.util.List;

public interface AdminService {
    boolean postCar(CarDto carDto) throws IOException;
    List<CarDto> getAllCars();
    void deleteCar(Long id);
    CarDto getCarById(Long id);
    boolean updateCar(Long carId,CarDto carDto) throws IOException;
    List<BookCarDto> getBookings();
    boolean changeBookingStatus(Long bookingId,String status);
    CarDtoListDto searchCar(SearchDto searchDto);
}
