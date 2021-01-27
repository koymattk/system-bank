import React, { useState } from 'react';

export default function() {
    const[typeAccount, setTypeAccount] = useState('');
    return (
        <form>
            <label>BANCO</label>
            <input type="text" />
            <label>AGENCIA</label>
            <input type="text" />
            <label>NUMERO DA CONTA</label>
            <input type="text" />
            <label>CPF</label>
            <input type="text" />
            <select value={typeAccount} onChange={value => setTypeAccount(value.target.value)}>
                    <option value={'corrente'}>CONTA CORRENTE</option>
                    <option value={'poupanca'}>POUPANÇA</option>
                    <option value={'salario'}>CONTA SALARIO</option>
            </select>
        </form>
    );
}