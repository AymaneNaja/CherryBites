'use client'

import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import { FoodApi } from './redux/FoodApi'
import { Provider } from 'react-redux'
import { SessionProvider } from 'next-auth/react'
import { UserApi } from './redux/UserApi'


function Providers({ children }: { children: React.ReactNode }) {
    const store = configureStore({
        reducer: {
            [FoodApi.reducerPath]: FoodApi.reducer,
            [UserApi.reducerPath]: UserApi.reducer
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(FoodApi.middleware, UserApi.middleware)
    })
    return (
        <SessionProvider>

            <Provider store={store}>
                {children}
            </Provider>
        </SessionProvider>

    )
}

export default Providers