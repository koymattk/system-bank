import * as S from './Styles';

import {Link} from 'react-router-dom'


export default function LoginPage () {
    return(
        <S.Container>
            <S.Text>
                <h2>BANKPIX</h2>
                <span>Login Bank System</span>
            </S.Text>
            <S.Inputs>
                <input type="text" placeholder="Conta" />
                <input type="text" placeholder="Senha" />
                <button>
                    <Link to="/homepageclient">LOGIN</Link>
                </button>
                <button>
                    <Link to="/homepage">REGISTRAR</Link>
                </button>
            </S.Inputs>
        </S.Container>
    )
}


