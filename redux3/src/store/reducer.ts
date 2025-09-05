import type { usersState } from './types'
import { combineReducers, createSlice } from '@reduxjs/toolkit'
import { usersApi } from './api'

const initialUsersState: usersState = {
    users: []
}

const usersSlice = createSlice({
    name: "users",
    initialState: initialUsersState,
    reducers: {
        
    }
})

export const rootReducer = combineReducers({
    users: usersSlice.reducer,
    [usersApi.reducerPath]: usersApi.reducer
})