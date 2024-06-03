package com.UserService.ReadRaves.Controller;


import com.UserService.ReadRaves.Model.User;
import com.UserService.ReadRaves.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.ResponseErrorHandler;

@RestController
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService){
        this.userService = userService;
    }

    @PostMapping("/registerUser")
    public ResponseEntity<String> registerUser(@RequestParam("username") String username
            , @RequestParam("password") String password
            , @RequestParam("email") String email
    ){

     User user = new User();
     user.setUsername(username);
     user.setPassword(password);
     user.setEmail(email);
        boolean saved = userService.saveUser(user);

        if (saved) {
            return new ResponseEntity<>("User registered successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Username or email already exists", HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/loginUser")
    public ResponseEntity<String> loginUser(@RequestParam("username") String username,
                                            @RequestParam("password") String password){
        User user = userService.findByUsername(username);
        if (user != null && user.getPassword().equals(password)) {
            return new ResponseEntity<>("Login successful", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Invalid credentials", HttpStatus.UNAUTHORIZED);
        }

    }

}
