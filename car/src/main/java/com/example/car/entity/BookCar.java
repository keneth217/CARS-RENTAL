package com.example.car.entity;

import com.example.car.dto.BookCarDto;
import com.example.car.enums.BookCarStatus;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.util.Date;

@Entity
@Data
@Table(name="booking")
public class BookCar {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Date fromDate;
    private Date toDate;
    private Long price;
    private Long days;
    private BookCarStatus bookCarStatus;

    @ManyToOne(fetch = FetchType.LAZY,optional = false)
    @JoinColumn(name="user_id",nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private User user;

    @ManyToOne(fetch = FetchType.LAZY,optional = false)
    @JoinColumn(name="car_id",nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    private Car car;
    public BookCarDto getBookCarDto(){
        BookCarDto bookCarDto=new BookCarDto();
        bookCarDto.setId(id);
        bookCarDto.setFromDate(fromDate);
        bookCarDto.setToDate(toDate);
        bookCarDto.setPrice(price);
        bookCarDto.setBookCarStatus(bookCarStatus);
        bookCarDto.setDays(days);
        bookCarDto.setUserId(user.getId());
        bookCarDto.setEmail(user.getEmail());
        bookCarDto.setUsername(user.getName());
        bookCarDto.setCarId(car.getId());
        return bookCarDto;
    }

}
