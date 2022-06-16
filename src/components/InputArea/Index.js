import React, { useState } from 'react'
import './styles.css'
import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'

function InputArea (props) {
    const [showPassword, setShowPassword] = useState(false)
    
    const changeShowPassword = () => setShowPassword(!showPassword)

    if(props.title === "Password") {
        return (
                <div className="inputArea__container">
                    <input 
                        id={props.title}
                        className="input--password" 
                        placeholder="&nbsp;"
                        // placeholder="Password" 
                        {...props}
                        type={showPassword ? "text" : "password" }
                    />
                    <label htmlFor={props.title} className="placeholder">{props.title}</label>
                    
                    {showPassword 
                        ? <AiFillEye onClick={changeShowPassword} className="eye" />
                        : <AiFillEyeInvisible onClick={changeShowPassword} className="eye" />
                    }

                </div>
        )
    }
    // placeholder={props.title}
    return (
        <div className="inputArea__container">

            <input   
                type="text" 
                placeholder="&nbsp;"
                {...props}
                id={props.title}
            />
            <label htmlFor={props.title} className="placeholder">{props.title}</label>
        </div>
    )
}

export default InputArea