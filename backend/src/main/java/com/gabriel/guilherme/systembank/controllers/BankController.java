package com.gabriel.guilherme.systembank.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gabriel.guilherme.systembank.services.BankService;

@RestController
@RequestMapping(value="/bank/amount")
public class BankController {
	
		@Autowired
		private BankService service;
		@GetMapping
		public ResponseEntity<Double> findAll() {
			double bankAmount = service.mountBank();
			return ResponseEntity.ok().body(bankAmount);
		}
		
		
}
