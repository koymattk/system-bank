import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { sacar } from '../../Services/api';

export default function() {
    const {id, index, bank} = useParams();
    const[value,setValue] = useState(0);
    return(
        <form>
            <label>Valor do saque</label>
            <input type="number" placeholder="R$" onChange={value => setValue(parseFloat(value.target.value))}/>
            <button onClick={()=>{
                sacar({
                    clientId:id,
                    index,
                    value
                }).then(res=>{
                    if(res.data !== 0){
                        alert("saque feito com sucesso");
                    }else{
                        alert("saque não realizado");
                    }
                });
            }} type="button">SACAR</button>
            <Link to={`/homepage/${id}/${bank}`}><span>VOLTAR</span></Link>
        </form>
    );
}