import * as S from './Styles';
import { fetchUserProfiles, validateLogin } from '../../Services/api';
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react';


export default function LoginPage () {
    const [clients, setClients] = useState([]);
    const[login, setLogin] = useState('');
    const[password, setPassword] = useState('');
    const[validando, setValidando] = useState('');
    useEffect(()=>{

        const getUsersBank = async () => {
            await fetchUserProfiles().then(res =>setClients(res.data));
        }
        getUsersBank();
        console.log(clients);

    },[])
    
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
                    <Link to={validateLogin(clients,login,password)[0] ? `/homepageclient/${validateLogin(clients,login,password)[1]}`: '/' }>
                        <span>LOGIN</span>
                    </Link>
                </S.Links>
                <S.Links>
                    <Link to="/registerpage">
                        <span>REGISTRAR</span>
                    </Link>
                </S.Links>
            </S.Inputs>
        </S.Container>
    )
}


