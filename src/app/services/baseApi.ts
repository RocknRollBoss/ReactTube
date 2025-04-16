import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const baseApi = createApi({
  reducerPath: "baseApi",
  tagTypes: ["Youtube"],
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders: headers => {
      headers.set("x-rapidapi-key", import.meta.env.VITE_RAPID_API_KEY)
      headers.set("x-rapidapi-host", import.meta.env.VITE_RAPID_API_HOST)
    },
  }),
  endpoints: () => ({}),
})
