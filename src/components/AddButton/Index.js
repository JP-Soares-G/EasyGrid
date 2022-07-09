import React from 'react'

import './styles.css'

function AddButton(props) {
    return (
        <button {...props} className="btn--add">
            {props.title}
        </button>
    )
}

export default AddButton