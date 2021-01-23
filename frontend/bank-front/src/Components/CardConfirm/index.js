import React from 'react';
import * as S from './styles';
import {Link} from 'react-router-dom'


export default function CardConfirm({nome, bank, value,typeAccount,numberAccount}){
    return(
        <S.Container>
            <h3>Nome</h3>
            <span>{nome}</span>
            <h3>Banco</h3>
            <span>{bank}</span>
            <h3>Valor</h3>
            <span>{value}</span>
        </S.Container>
    )
}