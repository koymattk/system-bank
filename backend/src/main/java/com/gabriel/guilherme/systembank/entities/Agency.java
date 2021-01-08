package com.gabriel.guilherme.systembank.entities;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity(name="tb_agency")
public class Agency {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String numberAgency;
	@ManyToOne
	@JoinColumn(name="id_bank")
	private Bank bank;
	
	@OneToMany(mappedBy = "agency")
	private List<Account> account;	
	public Agency() {
		
	}

	public Agency(Long id, String numberAgency, Bank bank) {
		super();
		this.id = id;
		this.numberAgency = numberAgency;
		this.bank = bank;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNumberAgency() {
		return numberAgency;
	}

	public void setNumberAgency(String numberAgency) {
		this.numberAgency = numberAgency;
	}

	public Bank getBank() {
		return bank;
	}

	public void setBank(Bank bank) {
		this.bank = bank;
	}
	
	
}
