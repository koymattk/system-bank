package com.gabriel.guilherme.systembank.services;

import java.util.List;

import com.gabriel.guilherme.systembank.model.Client;

public interface IclientService {
	
	List<Client> findAll();
	
	Client findById(String id);
	
	Client created(Client client);
	
	Client update(Client client);
}
