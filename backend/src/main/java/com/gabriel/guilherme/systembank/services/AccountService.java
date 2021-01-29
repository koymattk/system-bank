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
import com.gabriel.guilherme.systembank.model.IsEmployer;
import com.gabriel.guilherme.systembank.model.KeyPix;
import com.gabriel.guilherme.systembank.model.Saque;
import com.gabriel.guilherme.systembank.model.TransferAccount;
import com.gabriel.guilherme.systembank.repositories.ClientRepository;
import com.mongodb.client.model.geojson.Position;

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
        List<Client> clients =repository.findAll();
        List<Account> newAccounts = new ArrayList<Account>();
        for (Account account : client.getAccounts()) {
            if(position == client.getAccounts().indexOf(account)){
                if(account.getKeys().size()<5){
                    
                    for(Client client1 : clients){
                        for(Account account1 :client1.getAccounts()){
                            for(KeyPix pix : account1.getKeys()){
                                if(pix.getKeypix().equals(keyPix.getKeypix())){
                                    return null;
                                }
                            }
                        }
                    }
                    account.getKeys().add(keyPix);
                }else{
                    return null;
                }
                
            }
            newAccounts.add(account);
        }
        client.setAccounts(newAccounts); 
        return repository.save(client);
        
        
    }

    public Double transfer(TransferAccount account){
        
        List<Client> clients = repository.findAll();
        Client client = repository.findById(account.getClientId())
        .orElseThrow(()-> new IllegalArgumentException("Client not found"));
        for (Account account1 : client.getAccounts()) {
            if(account.getIndex() == client.getAccounts().indexOf(account1)){
                if(account1.getBalance() < account.getValue()){
                    System.out.println("Sem dinheiro na conta");
                    return 0.0;
                }else{
                    account1.setBalance(account1.getBalance() - account.getValue());
                    account1.getExtrato().add(new Extrato("Tranferiacia feita - Data: " + new Date().toString() + " - R$" + account.getValue()));
                    for (Client client2 : clients) {
                        for (Account account2 : client2.getAccounts()) {
                            for(Bank banks : account2.getBanks()){
                                if(banks.getBankName().equals(account.getBank())){
                                    if(account.getAgency().equals(account2.getAgency())){
                                        if(account.getNumberAccount().equals(account2.getNumberAccount())){
                                            if(account.getTypeAccount().equals(account2.getTypeAccount())){
                                                if(account.getCpf().equals(client.getCpf())){
                                                    if(account.getTypeAccount().equals("salario")){
                                                        if(account1.getEmployer().equals(IsEmployer.EMPLOYER)){
                                                            for(Account account3 : client.getAccounts()){
                                                                if(account3.getAgency().equals(account.getAgency())){
                                                                    if (account3.getNumberAccount().equals(account.getNumberAccount())){
                                                                        System.out.println("somosIGauis");
                                                                        if (account3.getTypeAccount().equals(account.getTypeAccount())){
                                                                            account3.setBalance(account3.getBalance() + account.getValue());
                                                                            account3.getExtrato().add(new Extrato("Deposito recebido - Data: " + new Date().toString() + " + R$" + account.getValue()));
                                                                            repository.save(client); 
                                                                            return account.getValue();          
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }else{
                                                            return 0.0;
                                                        }
                                                    }
                                                }if(account.getTypeAccount().equals("salario")){
                                                    System.out.println(account2.getEmployer().equals(IsEmployer.EMPLOYER));
                                                    if(account1.getEmployer().equals(IsEmployer.EMPLOYER)){
                                                        System.out.println("sera ?");
                                                        System.out.println("Tranferindo");
                                                        account2.setBalance(account2.getBalance() + account.getValue());
                                                        account2.getExtrato().add(new Extrato("Deposito recebido - Data: " + new Date().toString() + " + R$" + account.getValue()));
                                                        repository.save(client);
                                                        repository.save(client2);
                                                        return account.getValue();
                                                    }else{
                                                        System.out.println(account2.getEmployer());
                                                        System.out.println("deuRuim");
                                                        return 0.0;
                                                    }
                                                    
                                                }else{
                                                        System.out.println("sera ?");
                                                        System.out.println("Tranferindo");
                                                        account2.setBalance(account2.getBalance() + account.getValue());
                                                        account2.getExtrato().add(new Extrato("Deposito recebido - Data: " + new Date().toString() + " + R$" + account.getValue()));
                                                        repository.save(client);
                                                        repository.save(client2);
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
            }
        }
        System.out.println("Não passou em nada");
        return 0.0;
    }

    public Double transferPix(String clientId, String index, String keyPix, Double value){
        int position =  Integer.parseInt(index);
        List<Client> clients = repository.findAll();
        Client client = repository.findById(clientId)
        .orElseThrow(()-> new IllegalArgumentException("Client not found"));
        for (Account account : client.getAccounts()) {
            if(position == client.getAccounts().indexOf(account)){
                if(account.getBalance() < value){
                    System.out.println("olaaaaa");
                    return 0.0;
                }else{
                    account.setBalance(account.getBalance() - value);
                    account.getExtrato().add(new Extrato("Pix enviado - Data: " + new Date().toString() + " - R$" + value));
                    for (Client client2 : clients) {
                        for (Account account2 : client2.getAccounts()) {
                            for (KeyPix key : account2.getKeys()) {
                                if(key.getKeypix().equals(keyPix)){
                                    if(client.getId().equals(clientId)){
                                        for (Account account3 : client.getAccounts()) {
                                            for (KeyPix keys : account3.getKeys()) {
                                                if(keys.getKeypix().equals(keyPix)){
                                                    if(account3.getTypeAccount().equals("salario")){
                                                        if(account.getEmployer().equals(IsEmployer.EMPLOYER)){
                                                            account3.setBalance(account3.getBalance() + value);
                                                            account3.getExtrato().add(new Extrato("Pix recebido - Data: " + new Date().toString() + " + R$" + value));
                                                            repository.save(client);
                                                            return value;
                                                        }else{
                                                            return 0.0;
                                                        }
                                                    }else{
                                                        account3.setBalance(account3.getBalance() + value);
                                                        account3.getExtrato().add(new Extrato("Pix recebido - Data: " + new Date().toString() + " + R$" + value));
                                                        repository.save(client);
                                                        return value;
                                                    }
                                                    
                                                }
                                            }
                                        }
                                    }
                                    System.out.println("cheguei ate aqui");
                                    if(account2.getTypeAccount().equals("salario")){
                                        if(account.getEmployer().equals(IsEmployer.EMPLOYER)){
                                            account2.setBalance(account2.getBalance() + value);
                                            account2.getExtrato().add(new Extrato("Pix recebido - Data: " + new Date().toString() + " + R$" + value));
                                            repository.save(client);
                                            repository.save(client2);
                                            System.out.println("cheguei ate aqui2");  
                                            System.out.println(account.toString());
                                            System.out.println(account2.toString());                                 
                                            return value;
                                        }
                                    }else{
                                        account2.setBalance(account2.getBalance() + value);
                                        account2.getExtrato().add(new Extrato("Pix recebido - Data: " + new Date().toString() + " + R$" + value));
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


    public Double sacar(Saque saque){
        Client client = repository.findById(saque.getClientId())
        .orElseThrow(()-> new IllegalArgumentException("Client not found"));
        for (Account account : client.getAccounts()) {
            if(saque.getIndex() == client.getAccounts().indexOf(account)){
                if(account.getBalance() < saque.getValue()){
                    return 0.0;
                }else{
                    account.setBalance(account.getBalance() - saque.getValue());
                    account.getExtrato().add(new Extrato("Saque realizado - Data: " + new Date().toString() + " - R$" + saque.getValue()));
                    repository.save(client);
                    return saque.getValue();
                }
            }
        }

        return null;
    }

}