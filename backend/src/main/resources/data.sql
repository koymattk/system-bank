INSERT INTO tb_client (rg, cpf, name, employer) VALUES ('465456645456456', '45123548712', 'Iron Main', 0);
INSERT INTO tb_client (rg, cpf, name, employer) VALUES ('465456645456456', '12345678910', 'Joãozinho ', 0);
INSERT INTO tb_client (rg, cpf, name, employer) VALUES ('465456645456456', '98745632154', 'Monica', 0);
INSERT INTO tb_client (rg, cpf, name, employer) VALUES ('465456645456456', '98563214956', 'Tarcisio',1);

INSERT INTO tb_bank (name_Bank,number_Bank) VALUES ('Bradesco','218');
INSERT INTO tb_bank (name_Bank,number_Bank) VALUES ('itau','659');
INSERT INTO tb_bank (name_Bank,number_Bank) VALUES ('nubank','489');
INSERT INTO tb_bank (name_Bank,number_Bank) VALUES ('bomSucesso','167');

INSERT INTO tb_agency (number_Agency, id_bank) VALUES ('0001', 1);
INSERT INTO tb_agency (number_Agency, id_bank) VALUES ('0002', 1);
INSERT INTO tb_agency (number_Agency, id_bank) VALUES ('0003', 1);
INSERT INTO tb_agency (number_Agency, id_bank) VALUES ('0004', 1);

INSERT INTO tb_agency (number_Agency, id_bank) VALUES ('0001', 2);
INSERT INTO tb_agency (number_Agency, id_bank) VALUES ('0002', 2);
INSERT INTO tb_agency (number_Agency, id_bank) VALUES ('0003', 2);
INSERT INTO tb_agency (number_Agency, id_bank) VALUES ('0004', 2);

INSERT INTO tb_agency (number_Agency, id_bank) VALUES ('0001', 3);
INSERT INTO tb_agency (number_Agency, id_bank) VALUES ('0002', 3);
INSERT INTO tb_agency (number_Agency, id_bank) VALUES ('0003', 3);
INSERT INTO tb_agency (number_Agency, id_bank) VALUES ('0004', 3);

INSERT INTO tb_agency (number_Agency, id_bank) VALUES ('0001', 4);
INSERT INTO tb_agency (number_Agency, id_bank) VALUES ('0002', 4);
INSERT INTO tb_agency (number_Agency, id_bank) VALUES ('0003', 4);
INSERT INTO tb_agency (number_Agency, id_bank) VALUES ('0004', 4);

INSERT INTO tb_account (number_Account, id_agency, id_client) VALUES ('12354-1', 1, 4);
INSERT INTO tb_account (number_Account, id_agency, id_client) VALUES ('42354-4', 2, 2);
INSERT INTO tb_account (number_Account, id_agency, id_client) VALUES ('42354-9', 5, 3);
INSERT INTO tb_account (number_Account, id_agency, id_client) VALUES ('42354-5', 9, 1);
INSERT INTO tb_account (number_Account, id_agency, id_client) VALUES ('48254-3', 10, 1);
INSERT INTO tb_account (number_Account, id_agency, id_client) VALUES ('42354-9', 10, 2);
INSERT INTO tb_account (number_Account, id_agency, id_client) VALUES ('54646-2', 9, 4);