import React from 'react';
import * as S from './styles'
import {Link} from 'react-router-dom';

export default function RegisterBank(){
    return(
        <S.Container>
            <span>CADASTRO BANK</span>
            <label>opções de conta</label>
                <select value={null} onChange={null}>
                    <option value={0} >CONTA CORRENTE</option>
                    <option value={1} >POUPANÇA</option>
                    <option value={2} >CONTA SALARIO</option>
            </select>
            <span>SALDO INICIAL</span>
            <input placeholder='INFORME SEU SALDO'  type="Number"/>
            <S.Links>
                    <Link to="/">
                        <span>CADASTRAR</span>
                    </Link>
            </S.Links>
        </S.Container>
    )
}