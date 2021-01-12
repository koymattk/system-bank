package com.gabriel.guilherme.systembank.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.gabriel.guilherme.systembank.model.Client;

public interface ClientRepository extends MongoRepository<Client, String> {
	
}
