import React, { useEffect, useState } from 'react';
import * as S from './styles'
import {Link, useParams} from 'react-router-dom';
import { getClient } from '../../../Services/api';
import CardExtrato from '../../../Components/CardExtrato';


export default function HomePageC({balance, typeAccount,bank, index, id}){
    const[client, setClient] = useState({})
    const[showExtrato,setShowExtrato] = useState(false);
    useEffect(()=>{
        getClient(id).then(res=>setClient(res))
    },[])
    return(
        <S.Container>
            <S.Bank>
                <span>
                    {bank}
                </span>
            </S.Bank>
                <span>{`Conta: ${typeAccount}`}</span>
            <S.NameClient>
                <span>
                    {client.name} 
                </span>
            </S.NameClient>
            <span>
                SALDO
            </span>
            <S.Saldo>
                <span>
                    R$ {balance}
                </span>
            </S.Saldo>
            <S.Links>
                    <Link onClick={()=>{
                        if(typeAccount === "salario"){
                            alert("CONTA SALARIO PODE APENAS SACAR");
                        }
                    }} to={typeAccount !== "salario" ?`/transferpix/${id}/${index}/${bank}` : `/homepage/${id}/${bank}`}><span>TRANSFERIR VIA PIX</span></Link>
            </S.Links>
            <S.Links>
                    <Link onClick={()=>{
                        if(typeAccount === "salario"){
                            alert("CONTA SALARIO PODE APENAS SACAR");
                        }
                    }} to={typeAccount !== "salario" ? `/transfer/${id}/${index}/${bank}`:`/homepage/${id}/${bank}`}><span>TRANSFERIR</span></Link>
            </S.Links>
            <S.Links>
                    <Link to={`/sacar/${id}/${index}/${bank}`}><span>SACAR</span></Link>
            </S.Links>
            <S.Links>
                    <Link to={`/registerkeypix/${id}/${index}/${bank}`}><span>CADASTRAR PIX</span></Link>
            </S.Links>
            
            <CardExtrato id={id} index={index} showExtrato={showExtrato} />
            <button onClick={()=>{
                setShowExtrato(!showExtrato);
            }}>Gerar Extrato</button>
        </S.Container>
    )
}