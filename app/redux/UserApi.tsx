import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const UserApi = createApi({
    reducerPath: 'UserApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/api/user' }),
    tagTypes: ['recipe'],
    endpoints: (builder) => ({
        GetUserFavRecipes: builder.query({
            query: (id) => `/${id}`
            , providesTags: ['recipe']
        }),
        AddFavRecipe: builder.mutation({
            query: (data) => ({
                url: '/favoriteRecipe',
                method: 'POST',
                body: JSON.stringify(data)
            }), invalidatesTags: ['recipe']
        }),
        DeleteFavRecipe: builder.mutation({
            query: (data) => ({
                url: '/favoriteRecipe',
                method: 'Delete',
                body: JSON.stringify(data)
            }), invalidatesTags: ['recipe']
        }),
    })
})

export const { useGetUserFavRecipesQuery, useAddFavRecipeMutation, useDeleteFavRecipeMutation } = UserApi
