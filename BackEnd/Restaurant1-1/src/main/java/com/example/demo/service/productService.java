package com.example.demo.service;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Product;
import com.example.demo.repo.productRepository;

@Service
public class productService {
	@Autowired
	private productRepository repo;

	public List<Product> fetchProductList() {
		return repo.findAll();
	}
	public Product saveProductToDB(Product product)
	{
		return repo.save(product);
	}
	/*
	 * public Optional<Product> fetchProductById(String id) { return
	 * repo.findById(id); } public String DeleteProductById(String id) { String
	 * result; try { repo.deleteById(id); result="product successfully deleted";
	 * }catch(Exception e) { result="product is not deleted";
	 * 
	 * } return result; }
	 */
}
