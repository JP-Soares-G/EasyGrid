import axios from 'axios'

const TOKEN_KEY = 'user'

const instance = axios.create({
    baseURL: 'https://projetopsr.herokuapp.com'
});

function login({email, senha}) {
    const params = {
        email,
        senha
    }

    return instance.post("/login", params).then(res => {

        if(res.status === 200) {
            localStorage.setItem(TOKEN_KEY, JSON.stringify(params))
        }

        return params
    })
}

function logout() {
    localStorage.removeItem(TOKEN_KEY)
}

const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) != null


const getUser = () => localStorage.getItem(TOKEN_KEY);

const authService = {
    login,
    logout,
    getUser,
    isAuthenticated
}

export default authService