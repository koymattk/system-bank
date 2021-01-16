import React from 'react';
import * as S from './styles'
import {Link} from 'react-router-dom'
import CardBankClient from '../../Components/CardBankClient'

export default function HomePageClient() {

    return(
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
                    <CardBankClient bank="Banco Inter"/>
                </div>
            </S.ContentHomePageClient>
        </S.ContainerHomePageClient>
    );

}

