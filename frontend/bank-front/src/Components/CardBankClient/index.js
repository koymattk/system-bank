import React, { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import { getClient } from '../../Services/api'
import * as S from './styles'


export default function CardBankClient({bank}){
    const { id } = useParams();
    const[client, setClient] = useState({});
    useEffect(()=>{
        getClient(id).then(res=>setClient(res))
        
    },[])
    return(
        <S.Container>
        <h2>{bank}</h2>
        <S.Links>
        <Link to="/homepage"><span>ENTRA NA CONTA</span></Link>
        </S.Links>
        <S.Links>
        <Link to={`/registerbank/${bank}/${id}`}><span>CRIAR CONTA</span></Link>
        </S.Links>
        </S.Container>
        
    )
}