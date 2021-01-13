package com.gabriel.guilherme.systembank.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gabriel.guilherme.systembank.model.Account;
import com.gabriel.guilherme.systembank.model.Client;
import com.gabriel.guilherme.systembank.model.Bank;

import com.gabriel.guilherme.systembank.repositories.ClientRepository;

@Service
public class BankService implements IbankService {
	@Autowired
	private ClientRepository clientRepository;
	@Override
	public double mountBank(String nameBank) {
		List<Client> clients = clientRepository.findAll();
		double amountBank = 0; 
		for(Client client : clients) {
			for(Account account : client.getAccounts()) {
				for(Bank bank : account.getBanks()){
					if(bank.getBankName().equals(nameBank)){
						amountBank += account.getBalance();
					}
				}
			}
		}
		return amountBank;
	}

	@Override
	public double amountAgency(String nameBank, String agency) {
		List<Client> clients = clientRepository.findAll();
		double amountAgency = 0; 
		for(Client client : clients) {
			for(Account account : client.getAccounts()) {
				if(account.getAgency().equals(agency)){
					for(Bank bank : account.getBanks()){
						if(bank.getBankName().equals(nameBank)){
							amountAgency += account.getBalance();
						}
					}
				}
			}
		}
		return amountAgency;
		
	}

	
}
