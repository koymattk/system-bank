import React, {useEffect, useState} from 'react';
import * as S from './styles';
import {Link, useParams} from 'react-router-dom'
import CardConfirm from '../../Components/CardConfirm'
import {getClientPix} from '../../Services/api'; 

export default function TransferPix() {

    const[nome, setNome]=useState('');
    const[bank, setBank]=useState('');
    const[value, setValue]=useState('');
    const[passTrans, setPassTrans] = useState('')
    const[dataClient, setDataClient] = useState({});
    const[key, setKey] = useState('');
    const {index} = useParams();
    useEffect(()=>{
        getClientPix(key).then(res => setDataClient(res.data));
    },[key])
    return(
        <S.Container>
            <S.Inputs>
                <label>Digite a chave PIX para qual deseja transferir</label>
                <input onChange={key => setKey(key.target.value)} type="text" placeholder="CHAVE" />
                <label>Digite sua senha de transferencia</label>
                <input type="password" placeholder='senha de tranferencia' value={passTrans} onChange={pass => setPassTrans(pass.target.value)}  />
                <label>Qual valor você deseja transferir</label>
                <input type="text" placeholder="R$" />
                <input type="text" onChange={nome => setNome(nome.target.value)}/>
            </S.Inputs>
                <button type='button' onClick={()=>{
                   console.log(dataClient)
                }}>Tranferir</button>
                <CardConfirm typeAccount={dataClient.typeAccount} numberAccount={dataClient.numberAccount} agency={dataClient.agency} nome={dataClient.name} bank={dataClient.nameBank} cpf={dataClient.cpf} dateTransfer={dataClient.date}/>
        </S.Container>
    )
}