import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from './categoriesSlice';
import directionsReducer from './directionsSlice';
import filterReducer from './filterSlice';
import searchValueReducer from './searchValueSlice';
import toArrReducer from './toArrSlice';

const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        directions: directionsReducer,
        filter: filterReducer,
        searchValue: searchValueReducer,
        toArr: toArrReducer,
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;