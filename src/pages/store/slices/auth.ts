
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthStore } from "../../interface/authstore";
import { RootState } from "..";


const initialState: AuthStore = {
    email: "",
    token: localStorage.getItem('token') || ""
}

const slice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(auth, action: PayloadAction<AuthStore>) {
            auth.email = action.payload.email;
            auth.token = action.payload.token;
        },
        logout(auth) {
            auth.email = "";
            auth.token = "";
        },
    },
});

export const {login , logout} = slice.actions;

export default slice.reducer;

export const getMe = (store: RootState) => store.auth;