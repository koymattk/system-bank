import React from 'react';
import {Link} from 'react-router-dom';
import * as S from './styles'


export default function CardBankClient({bank}){
    return(
        <S.Container>
        <h2>{bank}</h2>
        <S.Links>
        <Link to="/homepage"><span>ENTRA NA CONTA</span></Link>
        </S.Links>
        <S.Links>
        <Link><span>CRIAR CONTA</span></Link>
        </S.Links>
        </S.Container>
    )
}