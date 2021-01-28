import React,{useEffect, useState} from 'react';
import * as S from './styles'
import {Link, useParams} from 'react-router-dom';
import { createAccount, agency } from '../../Services/api';

export default function RegisterBank(){
    const[clientType, setClientType] = useState(0);
    const { id , bank } = useParams();
    const[typeAccount, setTypeAccount] = useState('corrente');
    const[balance, setBalance] = useState(0)
    const getNumberBank = (bank) => {
        if(bank === 'Bs2'){
           return'218';
        }else if(bank === 'Nubank'){
           return '260';
        }else if(bank === 'Inter'){
           return '077';
        }else if(bank === 'Bradesco'){
           return '237';
        }
    }
    return(
        <S.Container>
            <span>CADASTRO BANK</span>
            <label>opções de conta</label>
                <select value={typeAccount} onChange={value => setTypeAccount(value.target.value)}>
                    <option value={'corrente'}>CONTA CORRENTE</option>
                    <option value={'poupanca'}>POUPANÇA</option>
                    <option value={'salario'}>CONTA SALARIO</option>
                </select>
            <label>TIPO DE CONTA</label>
                <select value={clientType} onChange={e => setClientType(e.target.value)}>
                    <option value={0} >Cliente</option>
                    <option value={1} >Empregador</option>
                </select>
            <span>SALDO INICIAL</span>
            <input onChange={balance=>setBalance(balance.target.value)} value={balance} placeholder='INFORME SEU SALDO'  type="Number"/>
            <button type="button" onClick={()=>{
                
                createAccount(id,{
                    typeAccount,
                    balance,
                    employer:clientType,
                    banks:[
                        {
                            bankName:bank,
                            numberBank:getNumberBank(bank)
                        }
                    ]
                }).then(res =>{
                    if(res.data === ""){
                        alert("A senha de transferencia já existe ela deve ser unica");
                    }
                });
            }}>CADASTRAR</button>
            <S.Links>
                    <Link to={`/homepageclient/${id}`}>
                        <span>VOLTAR</span>
                    </Link>
            </S.Links>
        </S.Container>
    )
}