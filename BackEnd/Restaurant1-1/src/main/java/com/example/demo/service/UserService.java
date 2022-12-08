package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.repo.UserRepo;

@Service
public class UserService {

	@Autowired
	UserRepo repository;

	public boolean logInUser(User user) {
		String email = user.getEmail();
		String password = user.getPassword();
		  User user1=repository.findByEmailAndPassword(email, password);
		  if(user1==null) {
			  return false;
		  }else {
			  return true;
		  }
		  

	}

	public User saveUser(User user) {

		return repository.save(user);
	}

}
