import { combineReducers, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { productsState, product } from "./types";
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
.addCase(fetchProducts.fulfilled,(state,action: PayloadAction<product[]>) => {
    state.loading = false
    state.products = action.payload
    })
.addCase(fetchProducts.rejected,(state,action ) => {
            state.loading = false
            state.error = action.payload as string 
            })
         }
})

const rootReducer = combineReducers({
    products: productsSlice.reducer
})

export default rootReducer