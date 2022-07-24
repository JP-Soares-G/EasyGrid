import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'

import InputArea from '../../../components/InputArea/Index'
import SubmitButton from '../../../components/SubmitButton/Index'
import GoogleAuth from './GoogleAuth'
import { login } from '../../../redux/authSlice'
import './loginForm.css'

function LoginForm() {
    const [username, setUsername] = useState("lizard@example.com")
    const [password, setPassword] = useState("lizard123")

    const dispatch = useDispatch()
    
    const submitLogin = e => {
        e.preventDefault()
        dispatch(login({username, password}))
        
    }
    return (
        <div className="form--login">
            <h1>Login</h1>

            <InputArea value={username} onChange={e => setUsername(e.target.value)} title="Username"/>
            <InputArea value={password} onChange={e => setPassword(e.target.value)} title="Password"/>
            {/* <SubmitBtn pending={isPending} title="Entrar" /> */}
            <SubmitButton onClick={submitLogin} pending={false} title="Entrar" />

            <p className="commom--text">Ou continue com</p>

            <GoogleAuth className="googleAuth" />
            {/* <OptionalsAuth /> */}

            <p>Ainda não possui uma conta? <Link className="toSignup" to="/signup">Cadastre-se</Link></p>
        </div>
    )
}

export default LoginForm