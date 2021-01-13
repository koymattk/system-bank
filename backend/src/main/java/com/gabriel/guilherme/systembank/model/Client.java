package com.gabriel.guilherme.systembank.model;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document
public class Client {
	@Id
	private String id;
	private String name;
	private String rg;
	private String cpf;
	private IsEmployer employer;
	private List<Account> accounts;
	
	public Client() {
		
	}

	public String getId() {
		return id; 
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getRg() {
		return rg;
	}

	public void setRg(String rg) {
		this.rg = rg;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public IsEmployer getEmployer() {
		return employer;
	}

	public void setEmployer(IsEmployer employer) {
		this.employer = employer;
	}

	public List<Account> getAccounts() {
		return accounts;
	}
	
	
}