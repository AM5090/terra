import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface DirectionsItem {
    code: string,
    name: string
}

interface DirectionsType {
    directions: DirectionsItem[];
}

const initialState: DirectionsType = {
    directions: []
}

export const directionsFetch = createAsyncThunk<DirectionsItem[], undefined, {rejectValue: string}>(
    'directions/directionsFetch',
    async function(_, {rejectWithValue}) {
        const response = await fetch('http://localhost:3001/directions');
        if(!response.ok) {
            return rejectWithValue('Server Error!');
        }

        const data = await response.json();
        return data;
    }
)

const directionsSlice = createSlice({
    name: "directions",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(directionsFetch.fulfilled, (state, action) => {
            state.directions = action.payload;
        })
    }
})

export default directionsSlice.reducer;