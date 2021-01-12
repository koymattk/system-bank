package com.gabriel.guilherme.systembank.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gabriel.guilherme.systembank.model.Account;
import com.gabriel.guilherme.systembank.model.Client;
import com.gabriel.guilherme.systembank.repositories.ClientRepository;

@Service
public class BankService implements IbankService {
	@Autowired
	private ClientRepository clientRepository;
	@Override
	public double mountBank() {
		List<Client> clients = clientRepository.findAll();
		double amountBank = 0; 
		for(Client client : clients) {
			for(Account account : client.getAccounts()) {
				amountBank += account.getBalance();
			}
		}
		return amountBank;
	}

	@Override
	public double amountAgency() {
		// TODO Auto-generated method stub
		return 0;
	}

	
}
