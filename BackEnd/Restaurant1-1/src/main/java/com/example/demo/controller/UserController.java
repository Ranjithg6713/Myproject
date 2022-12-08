package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.service.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/user")
public class UserController {

	@Autowired
	UserService service;

	@PostMapping("/registration")
	public ResponseEntity<User> registerUser(@RequestBody User user) {
		System.out.println("Controller Called");
		return ResponseEntity.ok(service.saveUser(user));
	}

	@PostMapping("/login")
	public boolean logIn(@RequestBody User user) {
		return service.logInUser(user);

	}

}
