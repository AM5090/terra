import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DirectionsItem {
    code: string,
    name: string
}

interface DirectionsType {
    directions: DirectionsItem[];
    mainFilteringValues: string[];
    mainFilteredArray: DirectionsItem[];
}

const initialState: DirectionsType = {
    directions: [],
    mainFilteringValues: [],
    mainFilteredArray: []
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
    reducers: {
        updateMainFilteringValues(state, action: PayloadAction<string[]>) {
            state.mainFilteringValues = action.payload;
        },
        updateMainFilteredArray(state, action: PayloadAction<DirectionsItem[]>) {
            state.mainFilteredArray = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(directionsFetch.fulfilled, (state, action) => {
            state.directions = action.payload;
        })
    }
})

export const {updateMainFilteringValues, updateMainFilteredArray} = directionsSlice.actions;

export default directionsSlice.reducer;