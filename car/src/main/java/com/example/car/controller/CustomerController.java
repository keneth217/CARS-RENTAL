package com.example.car.controller;

import com.example.car.dto.BookCarDto;
import com.example.car.dto.CarDto;
import com.example.car.dto.SearchDto;
import com.example.car.services.admin.AdminService;
import com.example.car.services.customer.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/customer")
@RequiredArgsConstructor
public class CustomerController {
    private final CustomerService customerService;

    @GetMapping("/cars")
    public ResponseEntity<List<CarDto>> getAllCars(){
        List<CarDto> carDtoList=customerService.getAllCars();
        return  ResponseEntity.ok(carDtoList);
    }
    @PostMapping("/car/book/{carId}")
    public ResponseEntity<?> BookCar(@PathVariable Long carId,@RequestBody BookCarDto bookCarDto) throws IOException {
        boolean booked=customerService.BookCar(carId,bookCarDto);
        if (booked){
            return  ResponseEntity.status(HttpStatus.CREATED).build();
        }else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }
    @GetMapping("/car/{id}")
    public ResponseEntity<CarDto> getCarById(@PathVariable Long id){
        CarDto carDto=customerService.getCarById(id);
        if (carDto== null){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(carDto);
    }
    @GetMapping("/car/bookings/{userId}")
    public ResponseEntity<List<BookCarDto>> getBookingByUserId(@PathVariable Long userId){
        return ResponseEntity.ok(customerService.getBookingByUserId(userId));
    }
    @PostMapping("/car/search")
    public ResponseEntity<?> searchCar(@RequestBody SearchDto searchDto){
        return ResponseEntity.ok(customerService.searchCar(searchDto));
    }

}
