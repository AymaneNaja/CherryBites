import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Recipe } from '../components/Recipe/Recipe'



export const FoodApi = createApi({
    reducerPath: 'FoodApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.spoonacular.com', prepareHeaders: async (headers) => {
            const res = (await fetch('/api/key'))
            const token = await res.json()
            if (token) {
                return headers.set("x-api-key", `${token.key}`)
            }
        }
    }),
    endpoints: (builder) => ({
        SearchRecipe: builder.query({
            query: (query) => '/recipes/complexSearch/' + new URLSearchParams({
                query
            }).toString()
        }),
        RandomRecipe: builder.query({
            query: () => `/recipes/random?number=100`
        }),
        SimilarRecipes: builder.query({
            query: (id) => `/recipes/${id}/similar`
        }),
        RecipeInfo: builder.query<Recipe, any>({
            query: (id) => `/recipes/${id}/information`
        }),
        RecipeNutrition: builder.query({
            query: (id) => `/recipes/${id}/nutritionWidget.json`
        }),
        RecipeInstructions: builder.query({
            query: (id) => `/recipes/${id}/analyzedInstructions`
        }),
        RecipeEquiment: builder.query({
            query: (id) => `/recipes/${id}/equipmentWidget.json`
        }),
        complexSearch: builder.query({
            query: (query) => `/recipes/complexSearch?${query}&number=100`
        }),
        autocomplete: builder.query({
            query: (query: string) => `/recipes/autocomplete?number=10&query=${query}`
        }),


    }),


})


export const {
    useAutocompleteQuery,
    useRecipeEquimentQuery,
    useSimilarRecipesQuery,
    useComplexSearchQuery,
    useRecipeInstructionsQuery,
    useSearchRecipeQuery,
    useRecipeInfoQuery,
    useRecipeNutritionQuery,
    useRandomRecipeQuery,
} = FoodApi
