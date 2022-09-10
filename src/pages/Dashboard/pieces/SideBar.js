import React, {useEffect} from 'react'
import {NavLink, useLocation, useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { logout } from '../../../redux/authSlice'
import './sidebar.css'


function SideBar(props) {
    let location = useLocation();
    let navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        if(location.pathname === "/dashboard" || location.pathname === "/dashboard/") {
            navigate("/dashboard/results")
        }
    }, [location, navigate]);

    const submitLogout = () => {
        dispatch(logout())
    }

    return (
        <div className="sidebar">
            <NavLink exact={true} activeClassName="selected" to="/dashboard/results" >Resultados</NavLink>
            <NavLink activeClassName="selected" to="/dashboard/institution">Instituições</NavLink>
            <NavLink activeClassName="selected" to="/dashboard/course">Cursos</NavLink>
            <NavLink activeClassName="selected" to="/dashboard/disciplines">Disciplinas</NavLink>
            <NavLink activeClassName="selected" to="/dashboard/professors">Professores</NavLink>
            <NavLink activeClassName="selected" to="/dashboard/turns" >Turnos</NavLink>
            <NavLink activeClassName="selected" to="/dashboard/generateresults" >Gerar Resultados</NavLink>

            <button onClick={submitLogout} className="off--btn">Sair</button>
        </div>
    )
}

export default SideBar