package com.gabriel.guilherme.systembank.services;

import com.gabriel.guilherme.systembank.model.Client;
import com.gabriel.guilherme.systembank.model.Data;
import com.gabriel.guilherme.systembank.model.KeyPix;

public interface IaccountService {
    String createRandomPix  ();
    Client registerKeyPix (String clientId, String index, KeyPix keyPix);
    Double transferPix (String clientId,String keyTrans, String keyPix, Double value);
    Data getAccountPix(String keyPix);
}
