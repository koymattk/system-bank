package com.gabriel.guilherme.systembank.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity(name = "tb_account")
public class Account {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String numberAccount;
	@ManyToOne
	@JoinColumn(name = "id_client")
	private Client client;
	@OneToMany(mappedBy="account", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	private List<KeyPix> keyPix;
	@ManyToOne
	@JoinColumn(name = "id_agency")
	private Agency agency;
	
	public Account() {
		
	}

	public Account(Long id, String numberAccount, Agency agency) {
		super();
		this.id = id;
		this.numberAccount = numberAccount;
		this.agency = agency;
	}
	
}
