import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchValueType {
    searchValue: string;
}

const initialState: SearchValueType = {
    searchValue: '',
}

const searchValueSlice = createSlice({
    name: "searchValue",
    initialState,
    reducers: {
        updateSearchValue(state, action: PayloadAction<string>) {
            state.searchValue = action.payload;
        }
    }
});

export const {updateSearchValue} = searchValueSlice.actions;

export default searchValueSlice.reducer;