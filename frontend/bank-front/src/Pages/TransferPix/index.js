import React from 'react';
import * as S from './styles';
import {Link} from 'react-router-dom'

export default function TransferPix() {
    return(
        <S.Container>
            <S.Inputs>
                <span>Digite a chave PIX para qual deseja transferir</span>
                <input type="text" placeholder="CHAVE" />
                <span>Qual valor você deseja transferir</span>
                <input type="text" placeholder="R$" />
            </S.Inputs>
            <S.Buttons>
                <button>
                    <Link to="/homepage">CONFIRMAR</Link>
                </button>
            </S.Buttons>
        </S.Container>
    )
}