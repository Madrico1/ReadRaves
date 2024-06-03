package com.UserService.ReadRaves.Model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name="review_user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id ;
    private String username;
    private String password;
    private String email;

}
