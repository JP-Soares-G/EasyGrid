import React from 'react'
import LoginForm from './pieces/LoginForm'

import bgImage from '../../assets/bg-image.png'
import './styles.css'

function Login() {
    return (
        <div className="login-page">
            <div className="login__wrapper">
                <img className="bg-image" src={bgImage} alt=""/>
                <LoginForm />
            </div>
        </div>
    )
}

export default Login