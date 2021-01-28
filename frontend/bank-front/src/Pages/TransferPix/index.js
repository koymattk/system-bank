import React, {useEffect, useState} from 'react';
import * as S from './styles';
import {Link, useParams} from 'react-router-dom'
import CardConfirm from '../../Components/CardConfirm'
import {getClientPix, transferPix} from '../../Services/api'; 

export default function TransferPix() {
    const[value, setValue]=useState(0);
    const[passTrans, setPassTrans] = useState('')
    const[dataClient, setDataClient] = useState({});
    const[key, setKey] = useState('');
    const {id, index, bank} = useParams();
    useEffect(()=>{
        if(key !== ''){
            getClientPix(key).then(res => setDataClient(res.data));
        }
        
    },[key])
    return(
        <S.Container>
            <S.Inputs>
                <label>Digite a chave PIX para qual deseja transferir</label>
                <input onChange={key => setKey(key.target.value)} type="text" placeholder="CHAVE" />
                <label>Digite sua senha de transferencia</label>
                <input type="password" placeholder='senha de tranferencia' value={passTrans} onChange={pass => setPassTrans(pass.target.value)}  />
                <label>Qual valor você deseja transferir</label>
                <input type="number" placeholder="R$" onChange={value => setValue(value.target.value)} />
               
            </S.Inputs>
                <button type='button' onClick={()=>{
                    console.log('oi')
                   transferPix(id,index,key, value).then(res=>{
                       if(res.data !== 0){
                           alert("Tranferencia feita com sucesso");
                       }else{
                           alert("Tranferencia não concluida");
                       }
                   });
                }}>Tranferir</button>
                <Link to={`/homepage/${id}/${bank}`}><span>VOLTAR</span></Link>
                <CardConfirm typeAccount={dataClient.typeAccount} numberAccount={dataClient.numberAccount} agency={dataClient.agency} nome={dataClient.name} bank={dataClient.nameBank} cpf={dataClient.cpf} dateTransfer={dataClient.date}/>
        </S.Container>
    )
}