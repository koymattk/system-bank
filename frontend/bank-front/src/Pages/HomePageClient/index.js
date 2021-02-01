import React from 'react';
import * as S from './styles'
import CardBankClient from '../../Components/CardBankClient'
import { Link } from 'react-router-dom';

export default function HomePageClient() {
    return(
        <>
        <S.ContainerHomePageClient>
            <S.ContentHomePageClient>
                <div>
                    <CardBankClient bank="Nubank"/>
                </div>
                <div>
                    <CardBankClient bank="Bradesco"/>
                </div>
                <div>
                    <CardBankClient bank="Bs2"/>
                </div>
                <div>
                    <CardBankClient bank="Inter"/>
                </div>
            </S.ContentHomePageClient>
        </S.ContainerHomePageClient>
            <S.Links>
                <Link to={'/'}>SAIR</Link>
            </S.Links>
        </>
    );

}

