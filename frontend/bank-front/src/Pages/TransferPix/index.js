import React, {useState} from 'react';
import * as S from './styles';
import {Link} from 'react-router-dom'
import CardConfirm from '../../Components/CardConfirm'


export default function TransferPix() {

    const[nome, setNome]=useState("Guilherme")
    const[bank, setBank]=useState("Nubank")
    const[value, setValue]=useState("R$ 120,00")
    
    return(
        <S.Container>
            <S.Inputs>
                <span>Digite a chave PIX para qual deseja transferir</span>
                <input type="text" placeholder="CHAVE" />
                <span>Qual valor você deseja transferir</span>
                <input type="text" placeholder="R$" />
            </S.Inputs>
                <S.Links>
                    <Link to="/homepage"><span>VERIFICAR</span></Link>
                </S.Links>
                <CardConfirm nome={nome} bank={bank} value={value}/>
        </S.Container>
    )
}