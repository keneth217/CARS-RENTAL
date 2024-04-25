package com.example.car.repository;

import com.example.car.entity.User;
import com.example.car.enums.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface UserRepository extends JpaRepository<User,Long> {
    Optional<User> findFirstByEmail(String email);

    User findByRole(Role role);
//    User findFirstByEmail(String email);
}
