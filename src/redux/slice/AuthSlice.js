import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuth: false
};

export const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signIn: (state) => {
            state.isAuth = true;
        },

        logout: (state) => {
            state.isAuth = false;
        }
    }
});

export const { signIn, logout } = AuthSlice.actions;

export default AuthSlice.reducer;
