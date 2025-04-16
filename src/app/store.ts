import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit"
import { baseApi } from "./services/baseApi"
import { subscriptionsReducer, likedReducer } from "@/features"
import { authApi } from "./services/authApi"

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    subscriptions: subscriptionsReducer,
    liked: likedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(baseApi.middleware, authApi.middleware),
})

export type AppStore = typeof store
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>
