package com.gabriel.guilherme.systembank.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gabriel.guilherme.systembank.model.Client;
import com.gabriel.guilherme.systembank.repositories.ClientRepository;

@Service
public class ClientService implements IclientService  {
	@Autowired
	private ClientRepository repository;
	
	@Override
	public List<Client> findAll() {
		return repository.findAll();
	}

	@Override
	public Client findById(String id) {
		return repository.findById(id)
				.orElseThrow(()-> new IllegalArgumentException("Client not found"));
	}

	@Override
	public Client created(Client client) {
		return repository.save(client);
	}

	@Override
	public Client update(Client client) {
		return repository.save(client);		
	}
	

	

}
