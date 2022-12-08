package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Product;
import com.example.demo.service.productService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/product")
public class ProductController {
	@Autowired
	private productService service;

	@GetMapping("/getProductList")
	public List<Product> fetchProductList1() {
		List<Product> product = new ArrayList<Product>();
		product = service.fetchProductList();
		return product;
	}
	@PostMapping("/addproduct")
	public Product saveproduct(@RequestBody Product product)
	{
		return service.saveProductToDB(product);
	}
	
}