import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { transfer } from '../../Services/api';

export default function() {
    const {id, index} = useParams();
    const[keyTrans, setKeyTrans] = useState('');
    const[bank, setBank] = useState('');
    const[agency, setAgency] =useState('');
    const[numberAccount, setNumberAccount] = useState('');
    const[cpf, setCpf] = useState('');
    const[value, setValue] = useState(0);
    const[typeAccount, setTypeAccount] = useState('corrente');
    return (
        <div>
            <form>
            <label>SENHA DE TRANSFERENCIA</label>
            <input type="password" value={keyTrans} onChange={key => setKeyTrans(key.target.value)}/>
            <label>BANCO</label>
            <input type="text" value={bank} onChange={bank => setBank(bank.target.value)}/>
            <label>AGENCIA</label>
            <input type="text" value={agency} onChange={agency => setAgency(agency.target.value)}/>
            <label>NUMERO DA CONTA</label>
            <input type="text" value={numberAccount} onChange={number => setNumberAccount(number.target.value)}/>
            <label>CPF</label>
            <input type="text" value={cpf} onChange={cpf => setCpf(cpf.target.value)}/>
            <select value={typeAccount} onChange={value => setTypeAccount(parseFloat(value.target.value))}>
                    <option value={'corrente'}>CONTA CORRENTE</option>
                    <option value={'poupanca'}>POUPANÇA</option>
                    <option value={'salario'}>CONTA SALARIO</option>
            </select>
            <label>VALOR QUE DESEJA TRANFERIR</label>
            <input type="number" placeholder="R$" value={value} onChange={value => setValue(value.target.value)} />
        </form>
            <button  type="button" onClick={()=>{
                transfer(id,index,{
                    bank,
                    agency,
                    numberAccount,
                    cpf,
                    value,
                    typeAccount
                }).then(res=>console.log(res.data));
            }}>TRANSFERIR</button>
        </div>
        
        
    );
}