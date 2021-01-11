package com.gabriel.guilherme.systembank.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gabriel.guilherme.systembank.entities.Account;

public interface AccountRepository extends JpaRepository<Account, Long> {
//
}
