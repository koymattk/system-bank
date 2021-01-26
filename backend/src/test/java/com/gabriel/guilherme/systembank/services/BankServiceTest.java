package com.gabriel.guilherme.systembank.services;
import static org.junit.jupiter.api.Assertions.assertTrue;



import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.web.WebAppConfiguration;


@SpringBootTest
@WebAppConfiguration
@RunWith(SpringRunner.class)
public class BankServiceTest {
    @Autowired
    private BankService service;
    @Autowired

    @Test
    public void mountBankTest() {
		assertTrue(service.mountBank("Nubank") == 15000.0);
		assertTrue(service.mountBank("Bradesco") == 1500.0);
		assertTrue(service.mountBank("Bs2") == 5000.0); 
		assertTrue(service.mountBank("Inter") == 3000.0);
	}
	@Test
    public void amountAgencyTest() {
		assertTrue(service.amountAgency("Nubank", "0001") == 4000.0);
		assertTrue(service.amountAgency("Nubank", "0002") == 4000.0);
		assertTrue(service.amountAgency("Nubank", "0003") == 7000.0);
	}

}

