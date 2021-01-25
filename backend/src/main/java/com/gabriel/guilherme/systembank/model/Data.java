package com.gabriel.guilherme.systembank.model;

import java.util.Date;

public class Data {
    private String name;
    private String cpf;
    private String nameBank;
    private Date date;

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
    public Date getDate() {
        return date;
    }
    public void setDate(Date date) {
        this.date = date;
    }
}
