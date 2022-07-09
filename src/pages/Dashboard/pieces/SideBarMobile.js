import React, {useEffect} from 'react'
import Hamburger from 'hamburger-react'
import {useDispatch} from 'react-redux'
import { logout } from '../../../redux/authSlice'
import {NavLink, useLocation, useNavigate} from 'react-router-dom'

import './sidebarMobile.css'

function SideBarMobile(props) {

    let location = useLocation();
    let navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        if(location.pathname === "/dashboard" || location.pathname === "/dashboard/") {
            navigate("/dashboard/results")
        }
    }, [location, navigate]);

    const {isOpen, setOpen} = props
    
    const submitLogout = () => {
        dispatch(logout())
    }

    return (
        <div style={isOpen ? {display: 'block'} : {display: 'none'}} className={`sidebarMobile`}>
            <div className="sidebarM__wrapper">
                <Hamburger toggled={isOpen} toggle={setOpen} color="white" size={20}/>
            </div>
            <div className="nav">
                <NavLink exact={true} activeClassName="selected" to="/dashboard/results" >Resultados</NavLink>
                <NavLink activeClassName="selected" to="/dashboard/disciplines">Disciplinas</NavLink>
                <NavLink activeClassName="selected" to="/dashboard/professors">Professores</NavLink>
                <NavLink activeClassName="selected" to="/dashboard/turns" >Turnos</NavLink>
                <NavLink activeClassName="selected" to="/dashboard/generateresults" >Gerar Resultados</NavLink>

                <button onClick={submitLogout} className="off--btn">Sair</button>

            </div>
        </div>
    )
}
// quero todos
// se for mais de 120 não quero
// otherwise quero
export default SideBarMobile