import React, {useState} from 'react'
import Hamburger from 'hamburger-react'
import './header.css'

function Header(props){
    const {isOpen, setOpen} = props
    return (
        <header>
            <h1 className="logo">EasyGrid</h1>
            <Hamburger toggled={isOpen} toggle={setOpen} size={20}/>
            
        </header>
    )
}

export default Header