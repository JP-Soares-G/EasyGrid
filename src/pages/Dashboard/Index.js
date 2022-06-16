import React, {useState} from 'react'
import Header from './pieces/Header'
import SideBarMobile from './pieces/SideBarMobile'
import './styles.css'
function Dashboard(){
    const [isOpen, setOpen] = useState(false)

    return (
        <div className="dashboard-page" >
            <Header isOpen={isOpen} setOpen={setOpen} />
            <SideBarMobile isOpen={isOpen} setOpen={setOpen} />
        </div>
    )
}

export default Dashboard