package com.gabriel.guilherme.systembank.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gabriel.guilherme.systembank.services.BankService;

@RestController
@RequestMapping(value="/bank/amount")
public class BankController {
	
		@Autowired
		private BankService service;

		@GetMapping("/{bankName}")
		public ResponseEntity<Double> amountBank(@PathVariable String bankName) {
			double bankAmount = service.mountBank(bankName);
			return ResponseEntity.ok().body(bankAmount);
		}
		@GetMapping("/{bankName}/{agency}")
		public ResponseEntity<Double> amountAgency(@PathVariable String bankName, @PathVariable String agency) {
			double agencyAmount = service.amountAgency(bankName,agency);
			return ResponseEntity.ok().body(agencyAmount);
		}

		
		
}
