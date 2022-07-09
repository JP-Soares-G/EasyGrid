import React from 'react'
import {Link} from 'react-router-dom'
import Hamburger from 'hamburger-react'
import './header.css'

function Header(props){
    const {isOpen, setOpen} = props
    return (
        <header>
            <Link to="/dashboard"><h1 className="logo">EasyGrid</h1></Link>
            <Hamburger toggled={isOpen} toggle={setOpen} size={20}/>
            
        </header>
    )
}

export default Header