import React, { useEffect, useState } from 'react';
import HomePageC from './HomePageC';
import { getClient } from '../../Services/api';
import { useParams } from 'react-router-dom';
export default function HomePage() {
    const {id, bank} = useParams();
    const[accounts, setAccount] = useState([])
    
    useEffect(()=>{
        
      
        getClient(id).then(res=>setAccount(res.accounts));
         
        console.log('oi')
        
    },[])
    return(
      
        <>
          <button type="button" onClick={()=>{console.log(accounts)}}>AAAA</button>
          {
            accounts.map(account => {
            return account.banks[0].bankName === bank ? <HomePageC index={accounts.indexOf(account)} balance={account.balance}typeAccount={account.typeAccount} bank={account.banks[0].bankName}/> : <></>
            })
           
          }
        </>
        
    )
}