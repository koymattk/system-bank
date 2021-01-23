import React, {useState} from 'react';
import * as S from './styles';
import {Link} from 'react-router-dom'
import CardConfirm from '../../Components/CardConfirm'


export default function TransferPix() {

    const[nome, setNome]=useState('');
    const[bank, setBank]=useState('');
    const[value, setValue]=useState('');
    const[passTrans, setPassTrans] = useState('')
    
    return(
        <S.Container>
            <S.Inputs>
                <label>Digite a chave PIX para qual deseja transferir</label>
                <input type="text" placeholder="CHAVE" />
                <label>Digite sua senha de transferencia</label>
                <input type="password" placeholder='senha de tranferencia' value={passTrans} onChange={pass => setPassTrans(pass.target.value)}  />
                <label>Qual valor você deseja transferir</label>
                <input type="text" placeholder="R$" />
            </S.Inputs>
                <S.Links>
                    <Link to="/homepage"><span>VERIFICAR</span></Link>
                </S.Links>
                <CardConfirm nome={nome} bank={bank} value={value}/>
        </S.Container>
    )
}