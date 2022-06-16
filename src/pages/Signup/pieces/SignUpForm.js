import React, { useState } from 'react'
import InputArea from '../../../components/InputArea/Index'
import SubmitButton from '../../../components/SubmitButton/Index'

import './signupForm.css'

function SignUpForm(props) {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitLogin = (event) => {
        event.preventDefault();
    }


    return (
        <div className="form--signup" onSubmit={submitLogin}>
            <h1 className="signup__title">Registre-se</h1>
            
            <InputArea value={username} onChange={e => setUsername(e.target.value)}  title="Username" />
            <InputArea value={email} onChange={e => setEmail(e.target.value)} title="E-mail" />
            <InputArea value={password} onChange={e => setPassword(e.target.value)} title="Password" />

            <SubmitButton pending={false} title="Registrar" />

            {/* <p>Já possui uma conta? faça <Link className="toLogin" to="/">Login</Link></p> */}
        </div>
    )
}

export default SignUpForm