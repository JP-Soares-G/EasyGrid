import React from 'react'

import './dayButton.css'

function DayButton(props) {
    return (
        <button className={"daybutton__container" + (props.isActive ? " active" : "")} {...props}>
            {props.title}
        </button>
    )
}

export default DayButton