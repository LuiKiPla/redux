import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { user } from "./types";




export const usersApi = createApi({
    reducerPath: "usersApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://jsonplaceholder.typicodeтол.com/"}),
    endpoints: (builder) => ({
        getUsers: builder.query<user[], { limit?: number, page?: number }>({
            query: ({ limit , page}) => ({
                url: '/users',
                params: {_limit: limit, _page: page}
            })
        })
    })
})