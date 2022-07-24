import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { toast } from 'react-toastify';
import signupService from '../services/signup'

let toastLoading = null

const signupValidation = ({email, senha, nome}) => {
    if(nome.trim() === '') {
        return "Nome não pode ser vazio!"
    }
    if(email !== undefined && email.trim() === '') {
        return "Email não pode ser vazio!"
    }
    if(senha.trim() === '') {
        return "Senha não pode ser vazia!"
    }
    

    return ""
}

export const signup = createAsyncThunk(
    "signup/signup",
    async ({username, email, password}, thunkAPI) => {
        const params = {
            nome: username,
            email: email,
            senha: password
        }
        try {
            
            const data = await signupService.signup(params)
            
            return {data: data}

        } catch(err) {
            let errMessage = signupValidation(params)
            if(errMessage === "") errMessage = err.response.data

            return thunkAPI.rejectWithValue({err: errMessage})
        }
    }
)

export const signupSlice = createSlice({
    name: "signup",
    initialState: {},
    extraReducers: {
        [signup.fulfilled]: (state, {payload}) => {
            // state.user = payload.user
            toast.update(toastLoading, {render: "Cadastrado", type: "success", isLoading: false, autoClose: 5000});
        },
        [signup.pending]: (state) => {
            toastLoading = toast.loading("Aguarde...")
        },
        [signup.rejected]: (state, {payload}) => {
            const defaultMsg = "Algo inesperado aconteceu. Tente novamente mais tarde."
            const errMessage = (payload.err !== "" ? payload.err : defaultMsg)
            toast.update(toastLoading, {render: errMessage, type: "error", isLoading: false, autoClose: 5000});
        }
    }
})

export default signupSlice.reducer