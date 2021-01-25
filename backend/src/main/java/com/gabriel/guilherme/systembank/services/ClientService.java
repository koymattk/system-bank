package com.gabriel.guilherme.systembank.services;

import java.util.List;
import java.util.Random;

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
		String [] agencys = new String[3];
		agencys[0] = "0001";
		agencys[1] = "0002";
		agencys[2] = "0003";
		Random random = new Random();
		String chars = "1234567890";
		String numberAccount = "";
		for(int i = 0; i < 5; i++) {
			char caracter = chars.charAt(random.nextInt(chars.length()));
			numberAccount = numberAccount + caracter;
		}

		Client client = repository.findById(clientId)
		.orElseThrow(()-> new IllegalArgumentException("Client not found"));
		account.setNumberAccount(numberAccount);
		account.setAgency(agencys[random.nextInt(3)]);
		client.getAccounts().add(account);
		System.out.println(agencys[random.nextInt(3)]);
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
