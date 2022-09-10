import React from 'react'
import {Link} from 'react-router-dom'
import './coursesButton.css'

function CoursesButton(props) {
    
    return(
        <Link className="btn--courses" to={`${props.item.id}`}>
            Cursos
        </Link>
    )
}

export default CoursesButton