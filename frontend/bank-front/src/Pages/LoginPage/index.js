import * as S from './Styles';

import {Link} from 'react-router-dom'


function LoginPage () {
    return(
        <S.Container>
            <S.Text>
                <span>Login Bank System</span>
            </S.Text>
            <S.Inputs>
                <input type="text" placeholder="Conta" />
                <input type="text" placeholder="Senha" />
                <button>
                    <Link to="/registerpage">Teste</Link>
                </button>
            </S.Inputs>
        </S.Container>
    )
}


export default LoginPage;