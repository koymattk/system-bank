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

    },[validando])
    
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
                    console.log(validateLogin(clients,login,password));
                }}>
                    <Link onClick={()=>{
                       const validade = validateLogin(clients,login,password)
                       if(validade[0] == true){
                           setValidando(`/homepage/${validade[1]}`)
                       }else{
                           setValidando('/')
                       }
                        
                    }} to={`${validando}`}>LOGIN</Link>
                </button>
                <button>
                    <Link to="/homepage">REGISTRAR</Link>
                </button>
            </S.Inputs>
        </S.Container>
    )
}


