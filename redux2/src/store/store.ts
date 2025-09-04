import { combineReducers, configureStore } from "@reduxjs/toolkit"
import productsReducer from './products/reducer'
import type { TypedUseSelectorHook } from "react-redux"
import { useSelector } from "react-redux"




export const store

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = ReturnType<typeof setupStore>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector