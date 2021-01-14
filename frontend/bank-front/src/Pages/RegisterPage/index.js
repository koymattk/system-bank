import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { postClient , validate } from '../../Services/api';
import * as S from './styles'



export default function RegisterPage() {
    const[clientType, setClientType] = useState(0);
    const[email, setEmail] = useState('');
    const[login, setLogin] = useState('');
    const[password, setPassword] = useState('');
    const[cPassword, setCPassword] = useState('');
    const[name, setName] = useState('');
    const[tell,setTell] = useState('');
    const[cpf, setCpf] = useState('');
    const[rg, setRg] = useState('');
    const[client, setClient] = useState();

    useEffect(()=>{
        if(client === undefined)
           return null
        else
            postClient(client);
    },[client])
    
    return(
        <S.Container>
        <form>
            <fieldset >
                <legend>CADASTRO BANK</legend>
                <label>Login</label>
                <input value = {login} onChange={login => setLogin(login.target.value)} type="text" placeholder="Login Desejado" />
                <label>Email</label>
                <input type="text" value = {email} placeholder="email" onChange={email => setEmail(email.target.value)}/>
                <label>Senha</label>
                <input value={password} onChange={password => setPassword(password.target.value)} type="password" placeholder="Senha" />
                <label>Confirme a Senha</label>
                <input value={cPassword} onChange={cPassword => setCPassword(cPassword.target.value)} type="password" placeholder="confirme sua senha" />
                <label>Nome</label>
                <input type="text" value={name} placeholder="Nome" onChange={name => setName(name.target.value)}/>
                <label>Tell:</label>
                <input type="text" value={tell} placeholder="telefone" onChange={tell => setTell(tell.target.value)} />
                <label>CPF</label>
                <input value={cpf} onChange={cpf => setCpf(cpf.target.value)} type="text" placeholder="Digite seu CPF" />
                <label>RG</label>
                <input value={rg} onChange={rg => setRg(rg.target.value)} type="text" placeholder="Digite seu RG" />
                <label>opções de conta</label>
                <select value={clientType} onChange={e => setClientType(e.target.value)}>
                    <option value={0} >Cliente</option>
                    <option value={1} >Empregador</option>
                </select>
                <button onClick={()=>{
                    if(validate(login,password,cPassword,cpf,rg, tell, email)){
                        setClient({name,tell,login,email,rg,cpf,password,employer:clientType})
                        console.log(client);
                    }
                    else{
                        console.log("Dados invalidos");
                    }
                }} >CADASTRAR</button>
                <button><Link to="/">VOLTAR</Link></button>
               
            </fieldset>
        </form>
        </S.Container>
    );
}

