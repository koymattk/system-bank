import React from 'react';
export default function CardBankAdmin({name}) {
    return ( 
        <div>
            <h3>{name}</h3>
           <button>MONTANTE BANK</button>
            <span>Montante: {}</span>
           <button>MONTANTE AGENCIA</button>
           <input type="text" placeholder="Agencia"/>
           <span>Montante Agencia: {}</span>
        </div>
    );
} 