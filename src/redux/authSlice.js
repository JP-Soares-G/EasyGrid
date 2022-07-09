import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import authService from '../services/auth'
import { toast } from 'react-toastify';

let toastLoading = null

const initialState = {
    user: authService.isAuthenticated() || null
}



export const login = createAsyncThunk(
    'auth/login',
    async ({username, password}, thunkAPI) => {
        
        try {
            const params = {email: username, senha: password}
            const data = await authService.login(params)
            
            return {user: data}
        } catch (err) {
            return thunkAPI.rejectWithValue(err)
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
            toast.update(toastLoading, {render: "Verifique os dados inseridos", type: "error", isLoading: false, autoClose: 5000});
        },
        [logout.fulfilled]: (state) => {
            state.user = null
        }
    }
})

export default authSlice.reducer