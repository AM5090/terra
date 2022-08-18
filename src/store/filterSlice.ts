import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface FilterItem {
    code: string,
    name: string
}

export interface FilterObject {
    from: FilterItem,
    to: FilterItem[]
}

interface FilterType {
    filter: FilterObject[]
}

const initialState: FilterType = {
    filter: []
}

export const filterFetch = createAsyncThunk(
    'filter/filterFetch',
    async function (_, {rejectWithValue}) {
        const response = await fetch('http://localhost:3001/filter');
        if(!response.ok) {
            return rejectWithValue('Server Error!');
        }

        const data = await response.json();
        return data;
    }
)

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(filterFetch.fulfilled, (state, action) => {
            state.filter = action.payload;
        })
    }
})

export default filterSlice.reducer;