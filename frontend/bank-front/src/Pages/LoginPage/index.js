import * as S from './Styles';
import { fetchUserProfiles, validateLogin } from '../../Services/api';
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react';


<<<<<<< HEAD
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

    },[validando])
    
=======
export default function LoginPage () {
>>>>>>> 5c0efd2bb7fd8788f5cb6617194d0788fe905c95
    return(
        <S.Container>
            <S.Text>
                <h2>BANKPIX</h2>
                <span>Login Bank System</span>
            </S.Text>
            <S.Inputs>
<<<<<<< HEAD
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
=======
                <input type="text" placeholder="Conta" />
                <input type="text" placeholder="Senha" />
                <button>
                    <Link to="/homepageclient">LOGIN</Link>
>>>>>>> 5c0efd2bb7fd8788f5cb6617194d0788fe905c95
                </button>
                <button>
                    <Link to="/homepage">REGISTRAR</Link>
                </button>
            </S.Inputs>
        </S.Container>
    )
}


