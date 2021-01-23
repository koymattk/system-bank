import React,{useEffect, useState} from 'react';
import * as S from './styles'
import {Link, useParams} from 'react-router-dom';
import { createAccount, agency } from '../../Services/api';

export default function RegisterBank(){
    const { id , bank } = useParams();

    const[typeAccount, setTypeAccount] = useState('corrente');
    const[numberBank, setNumberBank] = useState('');
    const[balance, setBalance] = useState(0)
    const[transPassword, setTransPassword] = useState('');
    useEffect(()=>{
        const getNumberBank = () => {
            if(bank === 'Bs2'){
                setNumberBank('2018');
            }else if(bank === 'Nubank'){
                setNumberBank('260');
            }else if(bank === 'Inter'){
                setNumberBank('077');
            }else if(bank === 'Bradesco'){
                setNumberBank('237');
            }
            getNumberBank();
            
        }
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
            <input onChange={pas => setTransPassword(pas.target.value)} value={transPassword} placeholder='SENHA DE TRANSFERANCIA' type="text" />
            <S.Links>
                    <Link to="/">
                        <span>CADASTRAR</span>
                    </Link>
            </S.Links>
            <button type="button" onClick={()=>{
                createAccount(id,{
                    typeAccount,
                    agency:agency(),
                    balance,
                    keyTrans:transPassword,
                    banks:[
                        {
                            bankName:bank,
                            numberBank
                        }
                    ]
                })
            }}>CADASTRAR</button>
            <button type="button" onClick={()=>{
                
            }}>aaaa</button>
        </S.Container>
    )
}