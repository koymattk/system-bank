import React, { useEffect, useState } from 'react';
import HomePageC from './HomePageC';
import { getClient } from '../../Services/api';
import { Link, useParams } from 'react-router-dom';
import * as S from './styles'

export default function HomePage() {
    const {id, bank} = useParams();
    const[accounts, setAccount] = useState([])
    
    useEffect(()=>{
        
      
        getClient(id).then(res=>setAccount(res.accounts));
         
        console.log('oi')
        
    },[])
    return(
      
        <>
        <S.Links>
          <Link to={`/homepageclient/${id}`}>VOLTAR</Link>
        </S.Links>
          {
            accounts.map(account => {
            return account.banks[0].bankName === bank ? <HomePageC id={id} index={accounts.indexOf(account)} balance={account.balance}typeAccount={account.typeAccount} bank={account.banks[0].bankName}/> : <></>
            })
           
          }
        </>
        
        
    )
}