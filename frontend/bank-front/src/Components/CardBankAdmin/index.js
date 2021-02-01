import React, { useState } from 'react';
import * as S from "./style"
import { ammountBank, ammountBankAgency} from '../../Services/api';



export default function CardBankAdmin({name}) {
    const[ammount, setAmmount] = useState(0);
    const[ammountAgency, setAmmountAgency] = useState(0);
    const[agency , setAgency] = useState('');
    return ( 
        <S.Container>
            <h3>{name}</h3>
           <button type="button" onClick={()=>{
               ammountBank(name).then(res=>setAmmount(res.data));
           }}>MONTANTE BANK</button>
            <span>Montante: R${ammount}</span>
            <button type="button" onClick={()=>{
                if(agency === ''){
                    return;
                }
                ammountBankAgency(name, agency).then(res=>setAmmountAgency(res.data));
            }} >MONTANTE AGENCIA</button>
           <input type="text" placeholder="Agencia" value={agency} onChange={agency=>setAgency(agency.target.value)}/>
           <span>Montante Agencia: R${ammountAgency}</span>
           
        </S.Container>
    );
} 