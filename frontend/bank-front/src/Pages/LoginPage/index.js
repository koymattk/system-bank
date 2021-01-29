import * as S from './Styles';
import { validateLogin ,validateId} from '../../Services/api';
import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react';


export default function LoginPage () {
    
    const[login, setLogin] = useState('');
    const[password, setPassword] = useState('');
    const[id,setID] = useState('');
    useEffect(()=>{
        const validar = async () =>{
           const id = await validateLogin(login,password)
           setID(id);
        }
        validar()

    },[login,password])
    
    return(
        <S.Container>
            <S.Text>
                <h2>BANKPIX</h2>
                <span>Login Bank System</span>
            </S.Text>
            <S.Inputs>
                <input type="text" placeholder="login" value={login}  onChange={login =>setLogin(login.target.value)}/>
                <input type="text" placeholder="Senha" value ={password} onChange={password => setPassword(password.target.value)}/>
                <S.Links>
                    <Link to={validateId(id) ?`/homepageclient/${id}`: '/' }>
                        <span>LOGIN</span>
                    </Link>                   
                </S.Links>
                <S.Links>
                    <Link to="/registerpage">
                        <span>REGISTRAR</span>
                    </Link>
                </S.Links>
            </S.Inputs>
            <Link to={'/adminpage'} >admin</Link>
        </S.Container>
    )
}


