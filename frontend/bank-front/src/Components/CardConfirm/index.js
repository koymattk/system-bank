import React from 'react';
import * as S from './styles';
import {Link} from 'react-router-dom'


export default function CardConfirm({nome, bank, value,typeAccount,numberAccount,agency, dateTransfer, cpf}){
    return(
        <S.Container>
            <h3>Nome</h3>
            <span>{nome}</span>
            <h3>Banco</h3>
            <span>{bank}</span>
            <h3>cpf</h3>
            <span>{cpf}</span>
            <h3>Data da tranferencia</h3>
            <span>{dateTransfer}</span>
        </S.Container>
    )
}