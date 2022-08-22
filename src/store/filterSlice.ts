import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FilterItem {
    code: string,
    name: string
}

export interface FilterObject {
    from: FilterItem,
    to: FilterItem[]
}

interface FilterType {
    filter: FilterObject[],
    toArr?: FilterItem[],
    secondFilteringValues: string[],
}

const initialState: FilterType = {
    filter: [],
    toArr: [],
    secondFilteringValues: [],
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
    reducers: {
        updateToArr(state, action: PayloadAction<FilterItem[] | undefined>) {
            state.toArr = action.payload;
        },
        updateSecondFilteringValues(state, action: PayloadAction<string[]>) {
            state.secondFilteringValues = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(filterFetch.fulfilled, (state, action) => {
            state.filter = action.payload;
        })
    }
})

export const {updateToArr, updateSecondFilteringValues} = filterSlice.actions;

export default filterSlice.reducer;