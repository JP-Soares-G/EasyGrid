import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://projetopsr.herokuapp.com'
});

const signup = ({email, nome, senha}) => {
    const params = {email, nome, senha}
    
    return instance.post("/usuarios", params).then(res => console.log(res))
}

const signupService = {
    signup
}

export default signupService