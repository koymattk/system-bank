package com.gabriel.guilherme.systembank.model;

public class TransferAccount {
    private String bank;
    private String agency;
    private String numberAccount;
    private String typeAccount;
    private String cpf;
    private Double Value;
    private String clientId;
    private int index;


    public TransferAccount() {
    }


    public TransferAccount(String bank, String agency, String numberAccount, String typeAccount, String cpf, Double Value, String clientId, int index) {
        this.bank = bank;
        this.agency = agency;
        this.numberAccount = numberAccount;
        this.typeAccount = typeAccount;
        this.cpf = cpf;
        this.Value = Value;
        this.clientId = clientId;
        this.index = index;
    }
    


    public String getBank() {
        return this.bank;
    }

    public void setBank(String bank) {
        this.bank = bank;
    }

    public String getAgency() {
        return this.agency;
    }

    public void setAgency(String agency) {
        this.agency = agency;
    }

    public String getNumberAccount() {
        return this.numberAccount;
    }

    public void setNumberAccount(String numberAccount) {
        this.numberAccount = numberAccount;
    }

    public String getTypeAccount() {
        return this.typeAccount;
    }

    public void setTypeAccount(String typeAccount) {
        this.typeAccount = typeAccount;
    }

    public String getCpf() {
        return this.cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public Double getValue() {
        return this.Value;
    }

    public void setValue(Double Value) {
        this.Value = Value;
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

}
