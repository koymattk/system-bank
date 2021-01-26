package com.gabriel.guilherme.systembank.services;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.List;

import com.gabriel.guilherme.systembank.model.Account;
import com.gabriel.guilherme.systembank.model.Client;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.web.WebAppConfiguration;


@SpringBootTest
@WebAppConfiguration
@RunWith(SpringRunner.class)
public class ClienteServiceTest {
    @Autowired
    private ClientService service;

    @Test
    public void findByIdTest() {
      Client client = service.findById("600f1f10e89f9d2896b8d118");
      assertEquals("koymatt", client.getLogin());
      assertEquals("PAULO GABRIEL GOMES MATIAS",client.getName());
      assertEquals("79988088092", client.getTell());
      assertEquals("KOYMATTK@GMAIL.COM", client.getEmail());
      assertEquals("3681954", client.getRg());
      assertEquals("07064987554", client.getCpf());  
    }

    @Test
    public void createAccount() {
        Client client = service.findById("600f6a3fe89f9d2896b8d119");
        int aux = client.getAccounts().size();
        client.getAccounts().add(new Account());
        assertTrue(client.getAccounts().size() > aux);
    }

    @Test
    public void created() {
        List<Client> clients = service.findAll();
        int aux = clients.size();
        clients.add(new Client());
        assertTrue(clients.size() > aux);
    }

    @Test
    public void  findAllTest() {
        List<Client> clients = service.findAll();
        int aux = clients.size();
        assertTrue(aux == clients.size());
    }
}
