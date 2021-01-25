import React,{useEffect, useState} from 'react';
import * as S from './styles'
import {Link, useParams} from 'react-router-dom';
import { createAccount, agency } from '../../Services/api';

export default function RegisterBank(){
    const { id , bank } = useParams();
    const[typeAccount, setTypeAccount] = useState('corrente');
    const[balance, setBalance] = useState(0)
    const[transPassword, setTransPassword] = useState('');
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
            <span>SALDO INICIAL</span>
            <input onChange={balance=>setBalance(balance.target.value)} value={balance} placeholder='INFORME SEU SALDO'  type="Number"/>
            <input onChange={pas => setTransPassword(pas.target.value)} value={transPassword} placeholder='SENHA DE TRANSFERANCIA' type="text" />
            <S.Links>
                    <Link to="/">
                        <span>CADASTRAR</span>
                    </Link>
            </S.Links>
            <button type="button" onClick={()=>{
                
                createAccount(id,{
                    typeAccount,
                    balance,
                    keyTrans:transPassword,
                    banks:[
                        {
                            bankName:bank,
                            numberBank:getNumberBank(bank)
                        }
                    ]
                })
            }}>CADASTRAR</button>
            <button type="button" onClick={()=>{
                console.log(getNumberBank(bank))
              
            }}>aaaa</button>
        </S.Container>
    )
}