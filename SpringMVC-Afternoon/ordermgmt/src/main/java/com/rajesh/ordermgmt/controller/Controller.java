package com.rajesh.ordermgmt.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.rajesh.ordermgmt.dao.SampleDao;
import com.rajesh.ordermgmt.model.Order;

@RestController
public class Controller {
	
	@Autowired
	private SampleDao sampleDao;
	
	@GetMapping(value="/create")
	public String hello() {
	return "hello";
		}
//	public ResponseEntity<String> createOrder(@RequestBody Order order) throws Exception {
//		System.out.println("order: "+ order);
//		String response = sampleDao.createOrder(order);
//		return new ResponseEntity<>(response,HttpStatus.CREATED);
//	}
	

	
//	@GetMapping(value="/payment")
//	public Payment getPayment() {
//		Payment payment = new Payment();
//		payment.setId(sampleDao.getId(1));
//		payment.setName(sampleDao.getName(1));
//		payment.setCredits(sampleDao.getCredits(1));
//		return payment;	
//	}
//	
//	@GetMapping("/payment/set/{cost}")
//	public void setCredits(@PathVariable int cost) {
//		System.out.println(cost);
//		sampleDao.setCredits(1, cost);
//	}
	
}
