package com.gabriel.guilherme.systembank.entities;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="tb_client")
public class Client {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	private String rg;
	private String cpf;
	private IsEmployer employer;
	@OneToMany(mappedBy = "client" ,fetch = FetchType.EAGER)
	private List<Account> account;
	public Client() {
		
	}

	public Client(Long id, String name, String rg, String cpf, IsEmployer employer ) {
		this.employer = employer;
		this.id = id;
		this.name = name;
		this.rg = rg;
		this.cpf = cpf;
		
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
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

	
}

