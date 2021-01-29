import React from 'react';
import { Link } from 'react-router-dom';
import CardBankAdmin from '../../Components/CardBankAdmin';
export default function HomePageAdmin() {
    return(
        <div>
            <CardBankAdmin name={'Nubank'}/>
            <CardBankAdmin name={'Bradesco'}/>
            <CardBankAdmin name={'Bs2'}/>
            <CardBankAdmin name={'Inter'}/>
    
            <div>
               <Link to={`/`}>VOLTAR</Link>
           </div>
           
        </div>
    );
}