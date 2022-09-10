import React from 'react'
import {Link} from 'react-router-dom'
import './styles.css'

function PreferencesButton(props) {
    return (
        <Link to={`/dashboard/professors/${props.id}`} {...props} className="btn--preferences">
            Preferências
        </Link>
    )
}

export default PreferencesButton