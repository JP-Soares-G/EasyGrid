import React, {useState} from 'react'
import {Outlet} from 'react-router-dom'

import Header from './pieces/Header'
import SideBar from './pieces/SideBar'
import SideBarMobile from './pieces/SideBarMobile'
import './styles.css'

function Dashboard(){
    const [isOpen, setOpen] = useState(false)

    return (
        <div className="dashboard-page" >
            <Header isOpen={isOpen} setOpen={setOpen} />
            <SideBarMobile isOpen={isOpen} setOpen={setOpen} />
            <div className="dashboard__wrapper">
                <SideBar />
                <Outlet />
            </div>
            
        </div>
    )
}

export default Dashboard