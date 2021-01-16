import * as S from './Styles';
import { fetchUserProfiles, validateLogin } from '../../Services/api';
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react';


function LoginPage () {
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
                <button type="button" onClick={()=>{
                    console.log(validateLogin(clients,login,password)[0]);
                }}>
                    <Link to={validateLogin(clients,login,password)[0] ? `/homepage/${validateLogin(clients,login,password)}`: '/' }>LOGIN</Link>
                </button>
                <button>
                    <Link to="/registerpage">REGISTRAR</Link>
                </button>
            </S.Inputs>
        </S.Container>
    )
}


export default LoginPage;