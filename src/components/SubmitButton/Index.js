import React from 'react'
// import { useSelector } from 'react-redux'
import './styles.css'
import {ThreeDots} from "react-loader-spinner"
function SubmitButton(props) {
    // const {isPending} = useSelector((state) => state.auth)
    return (
        <button {...props} className="btn--submit" type="submit">
            { !props.pending
                ? props.title
                : <ThreeDots color="royalblue" height={14.5} width={40} />
            }
        </button>
    )
}
export default SubmitButton