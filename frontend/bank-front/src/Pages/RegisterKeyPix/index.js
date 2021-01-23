import React, { useEffect, useState } from 'react';
import * as S from './styles';
import {Link, useParams} from 'react-router-dom'
import { createPix, registerKeyPix, getClient } from '../../Services/api';


export default function RegisterKeyPix() {
    const {id, index} = useParams();
    const[client, setClient] = useState({})
    const[keyPix, setKeyPix] = useState('');
    useEffect(()=>{
        getClient(id).then(res=>setClient(res))
        console.log(client);
    },[])
    return(
        <S.Container>
            <S.Inputs>
                <span>Digite a chave PIX deseja cadastrar</span>
                <input type="text" placeholder="CHAVE" />
            </S.Inputs>
            <S.Links>
                <Link to="/homepage"><span>CONFIRMAR</span></Link>
            </S.Links>
            <button type='button' onClick={()=>{
                createPix().then(res=>setKeyPix(res.data));
            }}>GERAR CHAVE PIX ALEATORIA</button>
            <input type="text" defaultValue={keyPix} />
            <button type="button" onClick={()=>{
                registerKeyPix(id, index, {keypix:keyPix}).then(res =>console.log(res.data))
                console.log("olá")
            }}>CADASTRAR CHAVE ALEATORIA</button>
        </S.Container>
    )
}