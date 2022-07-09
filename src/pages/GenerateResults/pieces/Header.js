import React from 'react'
import {Link} from 'react-router-dom'
import './header.css'

function Header(props){
    return (
        <header>
            <Link to="/dashboard"><h1 className="logo">EasyGrid</h1></Link>
            
        </header>
    )
}

export default Header