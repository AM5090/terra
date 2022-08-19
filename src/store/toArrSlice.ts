import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ToArrItem {
    code: string,
    name: string
}

interface ToArrType {
    toArr?: ToArrItem[],
}

const initialState: ToArrType = {
    toArr: [],
}

const toArrSlice = createSlice({
    name: "toArr",
    initialState,
    reducers: {
        updateToArr(state, action: PayloadAction<ToArrItem[] | undefined>) {
            state.toArr = action.payload;
        }
    }
});

export const {updateToArr} = toArrSlice.actions;

export default toArrSlice.reducer;