import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
    id: string
    name: string
    email: string
    number: string
    profileImg: string
    score: number
    chatId: string
    token: string
    isAuth: boolean
}

const initialState: CounterState = {
    id: "",
    name: "",
    email: "",
    number: "",
    profileImg: "",
    score: 0,
    chatId: "",
    token: "",
    isAuth: false
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUserdata: (state, action) => {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.number = action.payload.number;
            state.profileImg = action.payload.profileImg;
            state.chatId = action.payload.chatId;
            state.token = action.payload.token
            state.isAuth = true
        },
        resetUserdata: (state) => {
            Object.assign(state, initialState)
        }
    }

})

export const { addUserdata, resetUserdata } = userSlice.actions;

export default userSlice.reducer