import React, { useState } from 'react';
import './style.css';

const RegisterPage = () => {
    const[clientType, setClientType] = useState(0);
    return(
        <form className="registerContainer">
            <div className="registerContent">
                <label>Login</label>
                <input type="text" placeholder="Login Desejado" />
                <label>Senha</label>
                <input type="text" placeholder="Senha" />
                <label>Senha</label>
                <input type="text" placeholder="confirme sua senha" />
                <label>CPF</label>
                <input type="text" placeholder="Digite seu CPF" />
                <label>RG</label>
                <input type="text" placeholder="Digite seu RG" />
                <label>opções de conta</label>
                <select value={clientType} onChange={e => setClientType(e.target.value)}>
                    <option value={0} key="">Cliente</option>
                    <option value={1} key="">Empregador</option>
                </select>

            </div>
        </form>
    );
}

export default RegisterPage;