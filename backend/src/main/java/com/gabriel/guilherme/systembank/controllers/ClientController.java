package com.gabriel.guilherme.systembank.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gabriel.guilherme.systembank.model.Account;
import com.gabriel.guilherme.systembank.model.Client;
import com.gabriel.guilherme.systembank.services.ClientService;



@RestController
@RequestMapping(value="/clients")
public class ClientController {
	@Autowired
	private ClientService service;
	@GetMapping
	public ResponseEntity<List<Client>> findAll() {
		List<Client> list = service.findAll();
		return ResponseEntity.ok().body(list);
	}
	
	@GetMapping("/{id}")
	public Client findById(@PathVariable String id) {
		return service.findById(id);
	}
	@PostMapping("/login")
	public String authentication(@RequestBody Client client) {
		return service.aut(client);
	}
	@PostMapping
	public Client created(@RequestBody Client client) {
		return service.created(client);
	}
	
	@PutMapping("/{clientId}")
	public Client createAccount(@PathVariable String clientId, @RequestBody Account account) {
		return service.createAccount(clientId, account);
		
	}
}
