import { createSlice } from "@reduxjs/toolkit";

interface CategoriesType {
    cryptocurrencies: string[];
    banks: string[];
    cash: string[];
}

const initialState: CategoriesType = {
    cryptocurrencies: ['BTC', 'ETH', 'USDTTRC'],
    banks: ['ACRUB', 'SBERRUB', 'TCSBRUB'],
    cash: ['CASHUSD', 'CASHRUB'],
}

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {

    }
});

export default categoriesSlice.reducer;