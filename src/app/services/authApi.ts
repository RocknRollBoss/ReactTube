import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { ApiRoutes } from "./api-routes"
import { RegisterType } from "@/pages/register"
import { LoginType } from "@/pages/login"
import { ITokens } from "./types"

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_AUTH_API,
    prepareHeaders: headers => {
      const token = localStorage.getItem("token")
      if (token) {
        headers.set("Authorization", `Bearer ${JSON.parse(token)}`)
      }
      return headers
    },
  }),
  endpoints: builder => ({
    register: builder.mutation<RegisterType, RegisterType>({
      query: user => ({
        url: `${import.meta.env.VITE_AUTH_API}${ApiRoutes.REGISTER}`,
        method: "POST",
        body: user,
      }),
    }),
    login: builder.mutation<ITokens, LoginType>({
      query: body => ({
        url: `${import.meta.env.VITE_AUTH_API}${ApiRoutes.LOGIN}`,
        method: "POST",
        body,
      }),
      transformResponse: (response: ITokens) => {
        localStorage.setItem("token", JSON.stringify(response.access_token))
        localStorage.setItem("auth", "true")
        return response
      },
    }),
    getUser: builder.query<RegisterType, null>({
      query: () => ({
        url: `${import.meta.env.VITE_AUTH_API}${ApiRoutes.PROFILE}`,
        method: "GET",
      }),
    }),
  }),
})

export const { useRegisterMutation, useLoginMutation, useGetUserQuery } =
  authApi
