package com.gabriel.guilherme.systembank.services;
import java.util.Random;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;


import com.gabriel.guilherme.systembank.model.Account;
import com.gabriel.guilherme.systembank.model.Bank;
import com.gabriel.guilherme.systembank.model.Client;
import com.gabriel.guilherme.systembank.model.Data;
import com.gabriel.guilherme.systembank.model.Extrato;
import com.gabriel.guilherme.systembank.model.KeyPix;
import com.gabriel.guilherme.systembank.model.TransferAccount;
import com.gabriel.guilherme.systembank.repositories.ClientRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class AccountService implements IaccountService {
    @Autowired
    private ClientRepository repository;
   
    public String createRandomPix(){
        Random random = new Random();
		String chars = "abcdefghijklmnopqrstuvwxyz1234567890";
		
		String randomPix = "";
		for(int i = 0; i < 20; i++) {
			char caracter = chars.charAt(random.nextInt(chars.length()));
			randomPix = randomPix + caracter;
        }
        return randomPix;
    
    }
    

    public Client registerKeyPix(String clientId, String index, KeyPix keyPix){
        int position =  Integer.parseInt(index);
        
        Client client = repository.findById(clientId)
        .orElseThrow(()-> new IllegalArgumentException("Client not found"));

        List<Account> newAccounts = new ArrayList<Account>();
        for (Account account : client.getAccounts()) {
            if(position == client.getAccounts().indexOf(account)){
                account.getKeys().add(keyPix);
            }
            newAccounts.add(account);
        }
        client.setAccounts(newAccounts); 
        return repository.save(client);
        
        
    }

    public Double transferPix(String clientId, String index, String keyPix, Double value){
        
        int position =  Integer.parseInt(index);
        List<Client> clients = repository.findAll();
        Client client = repository.findById(clientId)
        .orElseThrow(()-> new IllegalArgumentException("Client not found"));
        for (Account account : client.getAccounts()) {
            if(position ==client.getAccounts().indexOf(account)){
                if(account.getBalance() < value){
                    System.out.println("olaaaaa");
                    return 0.0;
                }else{
                    account.setBalance(account.getBalance() - value);
                    account.getExtrato().add(new Extrato("- R$" + value + " Data: " + new Date().toString()));
                    
                    for (Client client2 : clients) {
                        for (Account account2 : client2.getAccounts()) {
                            for (KeyPix key : account2.getKeys()) {
                                if(key.getKeypix().equals(keyPix)){
                                    if(client.getId().equals(clientId)){
                                        for (Account account3 : client.getAccounts()) {
                                            for (KeyPix keys : account3.getKeys()) {
                                                if(keys.getKeypix().equals(keyPix)){
                                                    account3.setBalance(account3.getBalance() + value);
                                                    account3.getExtrato().add(new Extrato("+ R$" + value + "Data" + new Date().toString()));
                                                    repository.save(client);
                                                    return value;
                                                }
                                            }
                                        }
                                    }
                                    System.out.println("cheguei ate aqui");
                                    account2.setBalance(account2.getBalance() + value);
                                    account2.getExtrato().add(new Extrato("+ R$" + value + "Data" + new Date().toString()));
                                    repository.save(client);
                                    repository.save(client2);
                                    System.out.println("cheguei ate aqui2");  
                                    System.out.println(account.toString());
                                    System.out.println(account2.toString());                                 
                                    return value;
                                }
                            }
                        }
                    }
                }
            }
        }
        System.out.println("olaaaaa");
        return 0.0;
    }
    public Data getAccountPix(String keyPix){
        Data data = new Data();
        List<Client> clients = repository.findAll();
        for (Client client : clients) {
            for (Account account : client.getAccounts()) {
                for (KeyPix key : account.getKeys()) {
                    if(key.getKeypix().equals(keyPix)){
                        for(Bank bank : account.getBanks()){
                           data.setNameBank(bank.getBankName()); 
                        }
                        data.setCpf(client.getCpf());
                        data.setDate(new Date().toString());
                        data.setName(client.getName());
                        data.setAgency(account.getAgency());
                        data.setTypeAccount(account.getTypeAccount());
                        data.setNumberAccount(account.getNumberAccount());
                        return data;
                    }
                }
            }
        }
        return null;
    }

    public List<Extrato> getExtratos(String clientId, String index){
        int position =  Integer.parseInt(index);
        Client client = repository.findById(clientId)
        .orElseThrow(()-> new IllegalArgumentException("Client not found"));
        for (Account account : client.getAccounts()) {
            if(position == client.getAccounts().indexOf(account)){
                return account.getExtrato();
            } 
        }
        return null;

    }

    

    public Double transfer(String clientId, String index, TransferAccount account){
        int position =  Integer.parseInt(index);
        List<Client> clients = repository.findAll();
        Client client = repository.findById(clientId)
        .orElseThrow(()-> new IllegalArgumentException("Client not found"));
        System.out.println("ola");
        for (Account account1 : client.getAccounts()) {
            System.out.println("ola");

            if(position == client.getAccounts().indexOf(account1)){
                System.out.println("ola");
                if(account1.getBalance() < account.getValue()){
                    return 0.0;
                }else{
                    System.out.println("ola");
                    account1.setBalance(account1.getBalance() - account.getValue());
                    account1.getExtrato().add(new Extrato("- R$" + account.getValue() + " Data: " + new Date().toString()));
                    for (Client client2 : clients) {
                        if(client2.getCpf().equals(account.getCpf())){
                            for (Account account2 : client2.getAccounts()) {
                                if(account2.getAgency().equals(account.getAgency())
                                && account2.getNumberAccount().equals(account.getNumberAccount())
                                && account2.getTypeAccount().equals(account.getTypeAccount())){
                                    for (Bank bank : account2.getBanks()) {
                                        if(bank.getBankName().equals(account.getBank())){
                                            account2.setBalance(account2.getBalance() + account.getValue());
                                            account2.getExtrato().add(new Extrato("+ R$" + account.getValue() + "Data" + new Date().toString()));
                                            repository.save(client2);
                                            repository.save(client);
                                            return account.getValue();
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return 0.0;
    } 
}
