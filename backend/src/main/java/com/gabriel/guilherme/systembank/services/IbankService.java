package com.gabriel.guilherme.systembank.services;

public interface IbankService {
	double mountBank(String nameBank);
	double amountAgency(String nameBank, String bankAgency);
}
