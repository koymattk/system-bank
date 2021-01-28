package com.gabriel.guilherme.systembank.model;

public class Saque {

    private String clientId;
    private int index;
    private Double value;

    public Saque() {
    }

    public Saque(String clientId, int index, Double value) {
        this.clientId = clientId;
        this.index = index;
        this.value = value;
    }

    public String getClientId() {
        return this.clientId;
    }

    public void setClientId(String clientId) {
        this.clientId = clientId;
    }

    public int getIndex() {
        return this.index;
    }

    public void setIndex(int index) {
        this.index = index;
    }

    public Double getValue() {
        return this.value;
    }

    public void setValue(Double value) {
        this.value = value;
    }

}

    