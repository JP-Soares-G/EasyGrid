import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import authService from '../services/auth'
import { toast } from 'react-toastify';

let toastLoading = null

const initialState = {
    user: authService.isAuthenticated() || null
}

const authValidation = ({email, senha}) => {
    if(email !== undefined && email.trim() === '') {
        return "Email não pode ser vazio!"
    }
    if(senha.trim() === '') {
        return "Senha não pode ser vazia!"
    }

    return ""
}

export const login = createAsyncThunk(
    'auth/login',
    async ({username, password}, thunkAPI) => {
        
        const params = {email: username, senha: password}
        try {
            const data = await authService.login(params)
            
            return {user: data}
        } catch (err) {
            let errMessage = authValidation(params)
            return thunkAPI.rejectWithValue({err: errMessage})
        }
    }
)

export const logout = createAsyncThunk(
    "auth/logout",
    async () => {
        await authService.logout()
    }
)

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: {
        [login.fulfilled]: (state, {payload}) => {
            state.user = payload.user
            toast.update(toastLoading, {isLoading: false, autoClose: 1});
        },
        [login.pending]: (state) => {
            toastLoading = toast.loading("Aguarde...")
        },
        [login.rejected]: (state, {payload}) => {
            const defaultMsg = "Algo inesperado aconteceu. Tente novamente mais tarde."
            const errMessage = (payload.err !== "" ? payload.err : defaultMsg)
            toast.update(toastLoading, {render: errMessage, type: "error", isLoading: false, autoClose: 5000});
        },
        [logout.fulfilled]: (state) => {
            state.user = null
        }
    }
})

export default authSlice.reducer