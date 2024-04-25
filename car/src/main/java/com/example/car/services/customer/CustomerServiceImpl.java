package com.example.car.services.customer;

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
import com.example.car.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.stereotype.Service;

import java.awt.print.Book;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CustomerServiceImpl implements CustomerService {
    private final CarRepository carRepository;
    private final UserRepository userRepository;
    private final BookCarRepository bookCarRepository;

    @Override
    public List<CarDto> getAllCars() {
        return carRepository.findAll().stream().map(Car::getCarDto).collect(Collectors.toList());
    }

    @Override
    public boolean BookCar(Long carId,BookCarDto bookCarDto) {
        Optional<Car> optionalCar = carRepository.findById(bookCarDto.getCarId());
        Optional<User> optionalUser = userRepository.findById(bookCarDto.getUserId());
        if (optionalCar.isPresent() && optionalUser.isPresent() && bookCarDto.getFromDate() != null && bookCarDto.getToDate() != null) {
            Car existingCar = optionalCar.get();
            BookCar bookCar = new BookCar();
            bookCar.setUser(optionalUser.get());
            bookCar.setCar(existingCar);
            bookCar.setBookCarStatus(BookCarStatus.PENDING);
            System.out.println("booking a car");
            // Ensure fromDate and toDate are not null before calculating the difference
            long diffInMillSeconds = bookCarDto.getToDate().getTime() - bookCarDto.getFromDate().getTime();
            long days = TimeUnit.MILLISECONDS.toDays(diffInMillSeconds);
            bookCar.setDays(days);
            bookCar.setPrice(existingCar.getPrice() * days);
            bookCarRepository.save(bookCar);
            System.out.println(bookCar);
            System.out.println(bookCarDto);
            return true;
        }
        return false;
    }


    @Override
    public CarDto getCarById(Long id) {
        Optional<Car> optionalCar=carRepository.findById(id);
        return optionalCar.map(Car::getCarDto).orElse(null);
    }

    @Override
    public List<BookCarDto> getBookingByUserId(Long userId) {
        return bookCarRepository.findAllByUserId(userId)
                .stream()
                .map(BookCar::getBookCarDto)
                .collect(Collectors.toList());
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
