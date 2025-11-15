import { createSlice } from "@reduxjs/toolkit";

export interface sliceType {
    progressStatus: string
}

const initialState: sliceType = {
    progressStatus: "other"
}

const progressSlice = createSlice({
    name: "progressBar",
    initialState,
    reducers: {
        changeProgess: (state, action) => {
            state.progressStatus = action.payload.next
        },
        resetProgress: (state) => {
            state.progressStatus = "other"
        }
    }
})

export const { changeProgess, resetProgress } = progressSlice.actions
export default progressSlice.reducer

