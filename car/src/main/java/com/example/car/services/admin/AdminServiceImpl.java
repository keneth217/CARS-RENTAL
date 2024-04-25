package com.example.car.services.admin;

import com.example.car.dto.BookCarDto;
import com.example.car.dto.CarDto;
import com.example.car.dto.CarDtoListDto;
import com.example.car.dto.SearchDto;
import com.example.car.entity.BookCar;
import com.example.car.entity.Car;
import com.example.car.entity.User;
import com.example.car.enums.BookCarStatus;
import com.example.car.repository.BookCarRepository;
import com.example.car.repository.CarRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AdminServiceImpl implements AdminService{
    private final CarRepository carRepository;
    private final BookCarRepository bookCarRepository;
    @Override
    public boolean postCar(CarDto carDto) throws IOException {
      try {
          Car car=new Car();
          car.setBrand(carDto.getBrand());
          car.setColor(carDto.getColor());
          car.setTransmission(carDto.getTransmission());
          car.setName(carDto.getName());
          car.setDescription(carDto.getDescription());
          car.setPrice(carDto.getPrice());
          car.setYear(carDto.getYear());
          car.setType(carDto.getType());
          car.setImage(carDto.getImage().getBytes());
          carRepository.save(car);
          return  true;
      }catch (Exception e){
          return false;
      }
    }

    @Override
    public List<CarDto> getAllCars() {
        return carRepository.findAll().stream().map(Car::getCarDto).collect(Collectors.toList());
    }

    @Override
    public void deleteCar(Long id) {
    carRepository.deleteById(id);
    }

    @Override
    public CarDto getCarById(Long id) {
        Optional<Car> optionalCar=carRepository.findById(id);
        return optionalCar.map(Car::getCarDto).orElse(null);
    }

    @Override
    public boolean updateCar(Long carId, CarDto carDto) throws IOException {
        Optional<Car> optionalCar=carRepository.findById(carId);
        if (optionalCar.isPresent()){
            Car existingCar=optionalCar.get();
            if (carDto.getImage() != null)
                existingCar.setImage(carDto.getImage().getBytes());
            existingCar.setName(carDto.getName());
            existingCar.setBrand(carDto.getBrand());
            existingCar.setColor(carDto.getColor());
            existingCar.setTransmission(carDto.getTransmission());
            existingCar.setDescription(carDto.getDescription());
            existingCar.setPrice(carDto.getPrice());
            existingCar.setYear(carDto.getYear());
            existingCar.setType(carDto.getType());
            existingCar.setBrand(carDto.getBrand());
            carRepository.save(existingCar);
            return true;
        }else {
            return false;
        }
    }

    @Override
    public List<BookCarDto> getBookings() {
        return bookCarRepository.findAll()
                .stream()
                .map(BookCar::getBookCarDto)
                .collect(Collectors.toList());
    }

    @Override
    public boolean changeBookingStatus(Long bookingId, String status) {
        Optional<BookCar> optionalBookCar=bookCarRepository.findById(bookingId);
        if (optionalBookCar.isPresent()){
            BookCar existingBookCar=optionalBookCar.get();
            if (Objects.equals(status,"Approve")) {
                existingBookCar.setBookCarStatus(BookCarStatus.APPROVED);
            } else {
                existingBookCar.setBookCarStatus(BookCarStatus.REJECTED);
                bookCarRepository.save(existingBookCar);
                return true;
            }
        }
        return false;
    }

    @Override
    public CarDtoListDto searchCar(SearchDto searchDto) {
        Car car=new Car();
                car.setTransmission(searchDto.getTransmission());
        car.setBrand(searchDto.getBrand());
        car.setType(searchDto.getType());
        car.setColor(searchDto.getColor());
        ExampleMatcher exampleMatcher=ExampleMatcher.matchingAll()
                .withMatcher("brand",ExampleMatcher.GenericPropertyMatchers.contains().ignoreCase())
        .withMatcher("type",ExampleMatcher.GenericPropertyMatchers.contains().ignoreCase())
        .withMatcher("color",ExampleMatcher.GenericPropertyMatchers.contains().ignoreCase())
        .withMatcher("transmission",ExampleMatcher.GenericPropertyMatchers.contains().ignoreCase());
        Example<Car> carExample=Example.of(car,exampleMatcher);
        List<Car> carList=carRepository.findAll(carExample);
        CarDtoListDto carDtoListDto=new CarDtoListDto();
        carDtoListDto.setCarDtoList(carList.stream().map(Car::getCarDto).collect(Collectors.toList()));


        return carDtoListDto;
    }
}
