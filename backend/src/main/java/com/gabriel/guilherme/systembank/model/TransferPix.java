package com.gabriel.guilherme.systembank.model;

public class TransferPix {
    private String clientId;
    private String keyPix;
    private Double value;
    private int index;

    public TransferPix() {
    }

    public TransferPix(String clientId, String keyPix, Double value, int index) {
        this.clientId = clientId;
        this.keyPix = keyPix;
        this.value = value;
        this.index = index;
    }

    public String getClientId() {
        return this.clientId;
    }

    public void setClientId(String clientId) {
        this.clientId = clientId;
    }

    public String getKeyPix() {
        return this.keyPix;
    }

    public void setKeyPix(String keyPix) {
        this.keyPix = keyPix;
    }

    public Double getValue() {
        return this.value;
    }

    public void setValue(Double value) {
        this.value = value;
    }

    public int getIndex() {
        return this.index;
    }

    public void setIndex(int index) {
        this.index = index;
    }

}

    
