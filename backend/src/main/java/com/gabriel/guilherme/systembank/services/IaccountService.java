package com.gabriel.guilherme.systembank.services;

import java.util.List;

import com.gabriel.guilherme.systembank.model.Client;
import com.gabriel.guilherme.systembank.model.Data;
import com.gabriel.guilherme.systembank.model.Extrato;
import com.gabriel.guilherme.systembank.model.KeyPix;
import com.gabriel.guilherme.systembank.model.TransferAccount;

public interface IaccountService {
    String createRandomPix();
    Client registerKeyPix (String clientId, String index, KeyPix keyPix);
    Double transferPix (String clientId,String keyTrans, String keyPix, Double value);
    Data getAccountPix(String keyPix);
    List<Extrato> getExtratos(String clientId, String index);
    Double transfer(String clientId, String keyTrans, TransferAccount account);
}
