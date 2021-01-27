package com.gabriel.guilherme.systembank.controllers;

import java.util.List;

import com.gabriel.guilherme.systembank.model.Client;
import com.gabriel.guilherme.systembank.model.Data;
import com.gabriel.guilherme.systembank.model.KeyPix;
import com.gabriel.guilherme.systembank.model.TransferAccount;
import com.gabriel.guilherme.systembank.model.Extrato;

import com.gabriel.guilherme.systembank.services.AccountService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;


@RestController
@RequestMapping(value ="/account")
public class AccountController {
    @Autowired
    private AccountService service;
    @GetMapping("/createpix")
    public String createRandomPix () {
        return service.createRandomPix();
    }

    @PutMapping(value="/{clientId}/{index}")
    public Client registerKeyPix(@PathVariable String clientId, @PathVariable String index, @RequestBody KeyPix keypix) {
        
        return service.registerKeyPix(clientId, index, keypix);
    }
    @PutMapping(value="/transferpix/{clientId}/{index}/{keyPix}/{value}")
    public Double transferPix(@PathVariable String clientId, @PathVariable String index, @PathVariable String keyPix, @PathVariable Double value){
        return  service.transferPix(clientId, index, keyPix, value);
    }
    @PutMapping(value="/transfer/{clientId}/{index}")
    public Double transfer(@PathVariable String clientId, @PathVariable String index, @RequestBody TransferAccount account){
        return service.transfer(clientId, index, account);
    }
    @GetMapping("/{keyPix}")
    public Data getAccountPix(@PathVariable String keyPix){
        return service.getAccountPix(keyPix);
    }
    @GetMapping("/extrato/{clientId}/{index}")
    public List<Extrato> getExtrato(@PathVariable String clientId, @PathVariable String index){
        return service.getExtratos(clientId, index);
    }
}

