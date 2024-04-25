package com.example.car.controller;

import com.example.car.dto.BookCarDto;
import com.example.car.dto.CarDto;
import com.example.car.dto.SearchDto;
import com.example.car.services.admin.AdminService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor

public class AdminController {
    private final AdminService adminService;
    @PostMapping("/car")
    public ResponseEntity<?> postCar(@ModelAttribute CarDto carDto) throws IOException {
        boolean posted=adminService.postCar(carDto);
        if (posted){
            return  ResponseEntity.status(HttpStatus.CREATED).build();
        }else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }
    @GetMapping("/cars")
    public ResponseEntity<?> getAllCars(){
        return  ResponseEntity.ok(adminService.getAllCars());
    }
    @DeleteMapping("/car/{id}")
    public ResponseEntity<Void> deleteCar(@PathVariable Long id){
        adminService.deleteCar(id);
        return ResponseEntity.ok(null);
    }
    @GetMapping("/car/{id}")
    public ResponseEntity<CarDto> getCarById(@PathVariable Long id){
        CarDto carDto=adminService.getCarById(id);
        return ResponseEntity.ok(carDto);
    }

    @PutMapping("/car/{carId}")
    public ResponseEntity<Void> updateCar(@PathVariable Long carId,@ModelAttribute CarDto carDto) throws IOException {
        try {
            boolean updated = adminService.updateCar(carId, carDto);
            if (updated){
                return ResponseEntity.status(HttpStatus.OK).build();
            }else{
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }
            } catch(Exception e){
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
            }
        }
    @GetMapping("/car/bookings")
    public ResponseEntity<List<BookCarDto>> getBookings(){
        return ResponseEntity.ok(adminService.getBookings());
    }

    @PostMapping("/car/booking/{bookingId}/{status}")
    public ResponseEntity<?> changeBookingStatus(@PathVariable Long bookingId,@PathVariable String status)  {
        boolean StatusChanged=adminService.changeBookingStatus(bookingId,status);
        if (StatusChanged){
            return  ResponseEntity.ok().build();
        }else {
            return ResponseEntity.notFound().build();
        }
    }
    @PostMapping("/car/search")
    public ResponseEntity<?> searchCar(@RequestBody SearchDto searchDto){
        return ResponseEntity.ok(adminService.searchCar(searchDto));
    }
    }