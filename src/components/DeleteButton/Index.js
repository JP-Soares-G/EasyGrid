import React from 'react'
import {IoMdTrash} from 'react-icons/io'

import './styles.css'

function DeleteButton(props) {
    return (
        <button {...props} className="btn--delete">
            <IoMdTrash size={24} color="white" /> Remover
        </button>
    )
}

export default DeleteButton