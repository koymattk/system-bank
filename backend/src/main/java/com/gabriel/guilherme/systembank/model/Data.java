package com.gabriel.guilherme.systembank.model;


public class Data {
    private String name;
    private String cpf;
    private String nameBank;
    private String date;
    private String typeAccount;
    private String numberAccount;
    private String agency;

    public Data(){

    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getCpf() {
        return cpf;
    }
    public void setCpf(String cpf) {
        this.cpf = cpf;
    }
    public String getNameBank() {
        return nameBank;
    }
    public void setNameBank(String nameBank) {
        this.nameBank = nameBank;
    }
    public String getDate() {
        return date;
    }
    public void setDate(String date) {
        this.date = date;
    }
    public String getTypeAccount() {
        return typeAccount;
    }
    public void setTypeAccount(String typeAccount) {
        this.typeAccount = typeAccount;
    }
    public String getNumberAccount() {
        return numberAccount;
    }
    public void setNumberAccount(String numberAccount) {
        this.numberAccount = numberAccount;
    }
    public String getAgency() {
        return agency;
    }
    public void setAgency(String agency) {
        this.agency = agency;
    }
}
