import { configureStore } from "@reduxjs/toolkit"; 
import { rootReducer } from "./reducer";
import { usersApi } from "./api";



export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersApi.middleware)
})
