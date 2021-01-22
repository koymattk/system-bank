import React from 'react';
import {Link, useParams} from 'react-router-dom';

import * as S from './styles'


export default function CardBankClient({bank}){
    const { id } = useParams();
    return(
        <S.Container>
        <h2>{bank}</h2>
        <S.Links>
        <Link to={`/homepage/${id}/${bank}`}><span>ENTRA NA CONTA</span></Link>
        </S.Links>
        <S.Links>
        <Link to={`/registerbank/${bank}/${id}`}><span>CRIAR CONTA</span></Link>
        </S.Links>
        </S.Container>
        
    )
}