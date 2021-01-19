import React,{useEffect, useState} from 'react';
import * as S from './styles'
import {Link, useParams} from 'react-router-dom';
import { getClient, attClient } from '../../Services/api';

export default function RegisterBank(){
    const { id , bank } = useParams();
    const[client, setClient] = useState({});
    const[typeAccount, setTypeAccount] = useState('corrente ');
    const[balance, setBalance] = useState(0)
    useEffect(()=>{
        getClient(id).then(res=>setClient(res))
        
    },[])
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
            <S.Links>
                    <Link to="/">
                        <span>CADASTRAR</span>
                    </Link>
            </S.Links>
            <button type="button" onClick={()=>{
                console.log(client);
                attClient({
                    cpf:client.cpf,
                    email:client.email,
                    employer:client.employer,
                    id:id,
                    login:client.login,
                    name:client.name,
                    password:client.password,
                    rg:client.rg,
                    tell:client.tell,
                    accounts:[...client.accounts,
                        {
                            typeAccount:typeAccount,
                            agency:"001",
                            balance:balance,
                            banks:[
                                {
                                    bankName:bank,
                                    numberBank:"218"
                                }
                            ]
                        }
                    ]
                })
            }}>CADASTRAR</button>
        </S.Container>
    )
}