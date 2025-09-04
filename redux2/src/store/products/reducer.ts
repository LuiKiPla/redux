import { combineReducers, createSlice } from "@reduxjs/toolkit";
import type { productsState } from "./types";
import { fetchProducts } from './actionCreators'

const initialState: productsState = {
    products: [],
    loading: false,
    error: null
}


const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder)=> {
        builder
            .addCase(fetchProducts.pending, (state) =>{
                state.loading = true
            })
    }
})

const rootReducer = combineReducers({
    productsSlice
})

export default rootReducer