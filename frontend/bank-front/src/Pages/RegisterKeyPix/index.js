import React from 'react';
import * as S from './styles';
import {Link} from 'react-router-dom'

export default function RegisterKeyPix() {
    return(
        <S.Container>
            <S.Inputs>
                <span>Digite a chave PIX deseja cadastrar</span>
                <input type="text" placeholder="CHAVE" />
            </S.Inputs>
            <S.Links>
                    <Link to="/homepage"><span>CONFIRMAR</span></Link>
            </S.Links>
        </S.Container>
    )
}