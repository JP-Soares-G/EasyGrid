import React from 'react'
import Hamburger from 'hamburger-react'
import './sidebarMobile.css'

function SideBarMobile(props) {
    const {isOpen, setOpen} = props

    return (
        <div style={isOpen ? {width: '100%'} : {}} className="sidebarMobile">
            <div className="sidebarM__wrapper">
                <Hamburger toggled={isOpen} toggle={setOpen} color="white" size={20}/>
            </div>
            <p>Resultados</p>
            <p className="selected">Disciplinas</p>
            <p>Professores</p>
            <p>Turnos</p>
        </div>
    )
}

export default SideBarMobile