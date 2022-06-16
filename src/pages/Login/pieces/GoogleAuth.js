import React from 'react'
import {GoogleLogin} from 'react-google-login' 
// import { useDispatch } from 'react-redux'
// import { useHistory } from 'react-router'
// import authService from '../../../services/auth'
// import { login } from '../../../reducers/userSlice'

function GoogleAuth(props) {
    // const dispatch = useDispatch()
    // const history = useHistory()

    const onSuccess = async (res) => {
        const tokenId = res.tokenId
        // await authService.googleLogin(tokenId)
        console.log(tokenId)
    }
    
    const onFailure = (res) => {
        console.log('[Login Failed] res:', res)
    }

    return (   
        <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
        />     
    )
}

export default GoogleAuth