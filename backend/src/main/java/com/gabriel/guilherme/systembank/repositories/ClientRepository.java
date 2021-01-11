package com.gabriel.guilherme.systembank.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gabriel.guilherme.systembank.entities.Client;

public interface ClientRepository extends JpaRepository<Client, Long> {
//
}
