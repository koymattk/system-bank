package com.gabriel.guilherme.systembank.controllers;
import com.gabriel.guilherme.systembank.model.Client;
import com.gabriel.guilherme.systembank.model.KeyPix;
import com.gabriel.guilherme.systembank.services.AccountService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;


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
    @PutMapping(value="/transferpix/{clientId}/{keyTrans}/{keyPix}/{value}")
    public Double transferPix(@PathVariable String clientId, @PathVariable String keyTrans, @PathVariable String keyPix, @PathVariable Double value){
        return  service.transferPix(clientId, keyTrans, keyPix, value);
    }
    @GetMapping("/{keyPix}")
    public Client getAccountPix(@PathVariable String keyPix){
        return service.getAccountPix(keyPix);
    }
}

