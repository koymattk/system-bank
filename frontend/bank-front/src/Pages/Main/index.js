import React, {useEffect, useState} from 'react';
import * as S from './Styles';
import {fetchUserProfiles} from '../../Services/api'


const [nome, setNome] = setNome('OLá');


function Main () {
    return(
        <S.Container>
            <S.Text>
            <span>{nome}</span>
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