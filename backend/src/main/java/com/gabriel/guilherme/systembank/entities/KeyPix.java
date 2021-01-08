package com.gabriel.guilherme.systembank.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity()
@Table(name="tb_key_pix")
public class KeyPix {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String keyPix;
	@ManyToOne
	@JoinColumn(name="id_account")
	private Account account;
	public KeyPix() {
		
	}

	public KeyPix(Long id, String keyPix) {
		super();
		this.id = id;
		this.keyPix = keyPix;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getKeyPix() {
		return keyPix;
	}

	public void setKeyPix(String keyPix) {
		this.keyPix = keyPix;
	}
	
}