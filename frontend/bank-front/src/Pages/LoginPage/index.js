import * as S from './Styles';




function LoginPage () {
    return(
        <S.Container>
            <S.Text>
                <span>Login Bank System</span>
            </S.Text>
            <S.Inputs>
                <input type="text" placeholder="Conta" />
                <input type="text" placeholder="Senha" />
                <button>Login</button>
            </S.Inputs>
        </S.Container>
    )
}


export default LoginPage;