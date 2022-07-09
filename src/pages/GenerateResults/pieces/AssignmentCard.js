import React from 'react'
import './assignmentCard.css'

function AssignmentCard(props) {
    return (
        <div className="assignment__container">
            <p className="assignment__professor">00000 - Nome do professor {props.professor}</p>
            <span className="assigment__discipline">Cod001 - Nome da disciplina {props.professor}</span>
        </div>
    )
}

export default AssignmentCard