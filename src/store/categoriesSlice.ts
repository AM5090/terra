import { createSlice } from "@reduxjs/toolkit";

interface CategoriesItem {
    categoryName: string,
    categoryId: string,
    categoryType: [] | string[],
}

interface CategoriesType {
    categories: CategoriesItem[],
}

const initialState: CategoriesType = {
    categories: [
        {
            categoryName: 'Все',
            categoryId: 'All',
            categoryType: [],
        },
        {
            categoryName: 'Криптовалюты',
            categoryId: 'Cryptocurrencies',
            categoryType: ['BTC', 'ETH', 'USDTTRC'],
        },
        {
            categoryName: 'Банки',
            categoryId: 'Banks',
            categoryType: ['ACRUB', 'SBERRUB', 'TCSBRUB'],
        },
        {
            categoryName: 'Наличные',
            categoryId: 'Cash',
            categoryType: ['CASHUSD', 'CASHRUB'],
        }
    ]
}

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {

    }
});

export default categoriesSlice.reducer;