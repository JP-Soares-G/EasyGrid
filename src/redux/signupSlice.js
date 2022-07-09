import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { toast } from 'react-toastify';
import signupService from '../services/signup'

let toastLoading = null

export const signup = createAsyncThunk(
    "signup/signup",
    async ({username, email, password}, thunkAPI) => {
        try {
            const params = {
                nome: username,
                email: email,
                senha: password
            }
            
            const data = await signupService.signup(params)
            
            return {data}

        } catch(err) {
            return thunkAPI.rejectWithValue(err)
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
            toast.update(toastLoading, {render: "Verifique os dados inseridos", type: "error", isLoading: false, autoClose: 5000});
        }
    }
})

export default signupSlice.reducer