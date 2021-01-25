package com.gabriel.guilherme.systembank.model;


public class Data {
    private String name;
    private String cpf;
    private String nameBank;
    private String date;

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
}
