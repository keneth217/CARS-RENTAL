package com.example.car.repository;

import com.example.car.dto.BookCarDto;
import com.example.car.entity.BookCar;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookCarRepository  extends JpaRepository<BookCar,Long> {
    List<BookCar> findAllByUserId(Long userId);
}
