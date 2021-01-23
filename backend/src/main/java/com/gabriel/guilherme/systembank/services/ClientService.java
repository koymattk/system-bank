package com.gabriel.guilherme.systembank.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gabriel.guilherme.systembank.model.Account;
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
	public Client createAccount(String clientId, Account account) {
		Client client = repository.findById(clientId)
		.orElseThrow(()-> new IllegalArgumentException("Client not found"));
		client.getAccounts().add(account);
		return repository.save(client);		
	}
	@Override
	public String aut(Client cleint){
		List<Client> clients = repository.findAll();
		for(Client user : clients){
			if(cleint.getLogin().equals(user.getLogin()) && cleint.getPassword().equals(user.getPassword())){
				return user.getId();
			}
				
		}
		return "null";
		
	}
	

	

}
