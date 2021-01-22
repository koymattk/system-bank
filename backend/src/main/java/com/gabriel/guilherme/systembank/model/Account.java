package com.gabriel.guilherme.systembank.model;

import java.io.Serializable;
import java.util.List;


public class Account implements Serializable {
	
	private static final long serialVersionUID = 1L;
	private String typeAccount;
	private String keyTrans;
	private String agency;
	private double balance;
	private List<Bank> banks;
	private List<KeyPix> keys;
	
	public Account() {
		
	}
	public Account(String typeAccount, String agency, double balance) {
		this.typeAccount = typeAccount;
		this.agency = agency;
		this.balance = balance; 
	}

	public String getTypeAccount() {
		return typeAccount;
	}
	public String getKeyTrans() {
		return keyTrans;
	}

	public void setKeyTrans(String keyTrans) {
		this.keyTrans = keyTrans;
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
	public void setBalance(double balance) {
		this.balance = balance;
	}
	public List<Bank> getBanks() {
		return banks;
	}
	
	public List<KeyPix> getKeys() {
		return keys;
	}
	
}
