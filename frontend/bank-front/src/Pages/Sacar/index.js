import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { sacar } from '../../Services/api';

export default function() {
    const {id, index} = useParams();
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
                }).then(res=>console.log(res.data));
            }} type="button">SACAR</button>
        </form>
    );
}