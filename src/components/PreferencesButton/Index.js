import React from 'react'
import './styles.css'

function PreferencesButton(props) {
    return (
        <button {...props} className="btn--preferences">
            Preferências
        </button>
    )
}

export default PreferencesButton