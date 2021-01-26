import React, { useEffect, useState } from 'react';
import { getExtrato } from '../../Services/api';

export default function({showExtrato, id,index}) {
    const[extrato, setExtrato] = useState([]);
    useEffect(()=>{
        if(showExtrato){
            getExtrato(id,index).then(res=>setExtrato(res.data));
        }else{
            setExtrato([]);
        }
    },[showExtrato]);
    return(
        <div>        
                {
                    extrato.map(extrato =><h6>{extrato.informations}</h6> )
                }
        </div>
    );
}