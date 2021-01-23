package com.gabriel.guilherme.systembank.services;

import java.util.List;

import com.gabriel.guilherme.systembank.model.Account;
import com.gabriel.guilherme.systembank.model.Client;

public interface IclientService {
	
	List<Client> findAll();
	
	Client findById(String id);
	
	Client created(Client client);
	
	Client createAccount(String clientID, Account account);

	String aut(Client client);
}
