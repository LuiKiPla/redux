import { combineReducers, createSlice } from "@reduxjs/toolkit";
import type { productsState } from "./types";

const initialState: productsState = {
    products: []
}


const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {

    }
})

const rootReducer = combineReducers({
    productsSlice
})