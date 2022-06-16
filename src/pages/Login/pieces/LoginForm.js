import React, {useState} from 'react'
import InputArea from '../../../components/InputArea/Index'
import SubmitButton from '../../../components/SubmitButton/Index'
import GoogleAuth from './GoogleAuth'
import './loginForm.css'

function LoginForm() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className="form--login">
            <h1>Login</h1>

            <InputArea value={username} onChange={e => setUsername(e.target.value)} title="Username"/>
            <InputArea value={password} onChange={e => setPassword(e.target.value)} title="Password"/>
            {/* <SubmitBtn pending={isPending} title="Entrar" /> */}
            <SubmitButton pending={false} title="Entrar" />

            <p className="commom--text">Ou continue com</p>

            <GoogleAuth className="googleAuth" />
            {/* <OptionalsAuth /> */}

            {/* <p>Ainda não possui uma conta? <Link className="toSignUp" to="/signup">Cadastre-se</Link></p> */}
        </div>
    )
}

export default LoginForm