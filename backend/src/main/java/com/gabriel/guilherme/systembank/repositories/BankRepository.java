package com.gabriel.guilherme.systembank.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gabriel.guilherme.systembank.entities.Bank;

public interface BankRepository extends JpaRepository<Bank, Long> {
//
}
