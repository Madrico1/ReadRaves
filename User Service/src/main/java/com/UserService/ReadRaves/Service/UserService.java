package com.UserService.ReadRaves.Service;

import com.UserService.ReadRaves.Model.User;
import com.UserService.ReadRaves.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepo userRepo;
    @Autowired
    public UserService(UserRepo useRepo){
        this.userRepo = useRepo;
    }
    public boolean saveUser(User user) {
        if (userRepo.findByUsername(user.getUsername()).isPresent() ||
                userRepo.findByEmail(user.getEmail()).isPresent()) {
            return false;
        }
        userRepo.save(user);
        return true;
    }


    public User findByUsername(String username) {
        return userRepo.findByUsername(username).orElse(null);
    }
}
