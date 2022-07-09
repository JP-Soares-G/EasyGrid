import React from 'react'
import {MdEdit} from 'react-icons/md'
import './styles.css'

function EditButton(props) {
    return (
        <button {...props} className="btn--edit">
            <MdEdit size={24} color="white" /> Editar
        </button>
    )
}

export default EditButton