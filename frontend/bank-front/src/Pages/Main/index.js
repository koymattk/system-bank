import React from 'react';
import * as S from './Styles';
import {fetchUserProfiles} from '../../Services/api'
import { Link } from 'react-router-dom'



function teste() {
    <Link to="/profile"></Link>
}


function Main () {


    return(
        <S.Container>
            <S.Text>
            <span>BANK PIX</span>
            </S.Text>
            <S.Inputs>
            <input type="text" placeholder="Conta" />
            <input type="text" placeholder="Senha" />
            
            <button onClick={teste} >Login</button>
            </S.Inputs>
        </S.Container>
    )
}


export default Main;