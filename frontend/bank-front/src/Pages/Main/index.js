import React from 'react';
import * as S from './Styles';

function Main () {
    return(
        <S.Container>
            <S.Text>
            <span>BANK PIX</span>
            </S.Text>
            <S.Inputs>
            <input type="text" placeholder="Conta" />
            <input type="text" placeholder="Senha" />
            <button>Login</button>
            </S.Inputs>
        </S.Container>
    )
}


export default Main;