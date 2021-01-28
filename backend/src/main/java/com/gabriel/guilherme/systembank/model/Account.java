package com.gabriel.guilherme.systembank.model;

import java.io.Serializable;
import java.util.List;
import java.util.ArrayList;


public class Account implements Serializable {
	
	private static final long serialVersionUID = 1L;
	private String typeAccount;
	private String numberAccount;
	private String agency;
	private double balance;
	private IsEmployer employer;
	private List<Extrato> extrato = new ArrayList<Extrato>();
	private List<Bank> banks;
	private List<KeyPix> keys = new ArrayList<KeyPix>();
	
	public Account() {
		
	}
	public Account(String typeAccount, String agency, double balance, IsEmployer employer) {
		this.typeAccount = typeAccount;
		this.agency = agency;
		this.balance = balance; 
		this.employer = employer;
	}

	public String getTypeAccount() {
		return typeAccount;
	}
	
	public String getNumberAccount() {
		return numberAccount;
	}
	
	public void setNumberAccount(String numberAccount) {
		this.numberAccount = numberAccount;
	}

	public void setTypeAccount(String typeAccount) {
		this.typeAccount = typeAccount;
	}

	public String getAgency() {
		return agency;
	}

	public void setAgency(String agency) {
		this.agency = agency;
	}
	
	public double getBalance() {
		return balance;
	}

	public IsEmployer getEmployer() {
		return this.employer;
	}

	public void setEmployer(IsEmployer employer) {
		this.employer = employer;
	}
	public void setBanks(List<Bank> banks) {
		this.banks = banks;
	}
	public void setKeys(List<KeyPix> keys) {
		this.keys = keys;
	}

	public void setBalance(double balance) {
		this.balance = balance;
	}
	public List<Extrato> getExtrato() {
		return extrato;
	}
	public void setExtrato(List<Extrato> extrato) {
		this.extrato = extrato;
	}
	public List<Bank> getBanks() {
		return banks;
	}
	
	public List<KeyPix> getKeys() {
		return keys;
	}
	
}
