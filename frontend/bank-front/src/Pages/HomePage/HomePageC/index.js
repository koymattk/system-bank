import React, { useEffect, useState } from 'react';
import * as S from './styles'
import {Link, useParams} from 'react-router-dom';
import { getClient } from '../../../Services/api';


export default function HomePageC({balance, typeAccount,bank, index}){
    const { id } = useParams();
    const[client, setClient] = useState({})
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
                    <Link to="/transferpix"><span>TRANSFERIR</span></Link>
            </S.Links>
            <S.Links>
                    <Link to={`/registerkeypix/${id}/${index}`}><span>CADASTRAR PIX</span></Link>
            </S.Links>
        </S.Container>
    )
}