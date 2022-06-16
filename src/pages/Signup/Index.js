import React from 'react'
import SignUpForm from './pieces/SignUpForm'
import bgImage from '../../assets/bg-image.png'

import './styles.css'

function Signup(props) {
    return (
        <div className="signup-page">
            <div className="signup__wrapper">
                <img className="bg-image" src={bgImage} alt=""/>
                <SignUpForm />
            </div>
        </div>
    )
}

export default Signup