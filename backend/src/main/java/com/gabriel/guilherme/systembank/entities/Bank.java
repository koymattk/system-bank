package com.gabriel.guilherme.systembank.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;


@Entity
@Table(name="tb_bank")
public class Bank {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String nameBank;
	private String numberBank;
	@OneToMany(mappedBy = "bank",fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	private List<Agency> agency;
	public Bank() {
		
	}

	public Bank(Long id, String nameBank, String numberBank) {
		super();
		this.id = id;
		this.nameBank = nameBank;
		this.numberBank = numberBank;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNameBank() {
		return nameBank;
	}

	public void setNameBank(String nameBank) {
		this.nameBank = nameBank;
	}

	public String getNumberAccount() {
		return numberBank;
	}

	public void setNumberAccount(String numberBank) {
		this.numberBank = numberBank;
	}

	public List<Agency> getAgency() {
		return agency;
	}

	
	
	
}