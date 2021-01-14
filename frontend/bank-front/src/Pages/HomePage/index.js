import React from 'react';
import * as S from './styles'
import {Link} from 'react-router-dom';


export default function HomePage(){
    return(
        <S.Container>
            <S.Bank>
                <span>
                    Nubank
                </span>
            </S.Bank>
            <S.NameClient>
                <span>
                    Guilherme 
                </span>
            </S.NameClient>
            <span>
                SALDO
            </span>
            <S.Saldo>
                <span>
                    R$ 4.000,00
                </span>
            </S.Saldo>
            <S.Buttons>
            <button>
                    <Link to="/transferpix">TRANSFERIR</Link>
            </button>
            <button>
                    <Link to="/registerkeypix">CADASTRAR PIX</Link>
            </button>
            </S.Buttons>
        </S.Container>
    )
}