import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { signup } from '../../../redux/signupSlice'
import InputArea from '../../../components/InputArea/Index'
import SubmitButton from '../../../components/SubmitButton/Index'

import './signupForm.css'

function SignUpForm(props) {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    const submitSignup = (event) => {
        event.preventDefault();
        const params = {username, email, password}
        dispatch(signup(params))
    }


    return (
        <div className="form--signup">
            <h1 className="signup__title">Registre-se</h1>
            
            <InputArea value={username} onChange={e => setUsername(e.target.value)}  title="Username" />
            <InputArea value={email} onChange={e => setEmail(e.target.value)} title="E-mail" />
            <InputArea value={password} onChange={e => setPassword(e.target.value)} title="Password" />

            <SubmitButton onClick={submitSignup} pending={false} title="Registrar" />

            <p>Já possui uma conta? faça <Link className="toLogin" to="/">Login</Link></p>
        </div>
    )
}

export default SignUpForm