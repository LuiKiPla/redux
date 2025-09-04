import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import type {product } from './types'

export const fetchProducts = createAsyncThunk<product[], void,{rejectValue: string}>(
  'products/fetchProducts',
  async (_, thunkApi) => {
     try {
        const response = await axios.get<product[]>('https://fakestoreapi.com/products')
       return response.data
     } catch (error: unknown) {
     return thunkApi.rejectWithValue('Ошибка загрузки товаров')
       }
  }
)