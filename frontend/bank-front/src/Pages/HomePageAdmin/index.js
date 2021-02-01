import React from 'react';
import { Link } from 'react-router-dom';
import CardBankAdmin from '../../Components/CardBankAdmin';
import * as S from './styles'

export default function HomePageAdmin() {
    return(
        <div>
            <S.Links>
               <Link to={`/`}>VOLTAR</Link>
           </S.Links>
            <CardBankAdmin name={'Nubank'}/>
            <CardBankAdmin name={'Bradesco'}/>
            <CardBankAdmin name={'Bs2'}/>
            <CardBankAdmin name={'Inter'}/>           
        </div>
    );
}