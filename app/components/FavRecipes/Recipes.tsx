'use client'
import { useGetUserFavRecipesQuery } from '@/app/redux/UserApi'
import { useSession } from 'next-auth/react'
import React from 'react'
import LoadingRecipeBox from '../Recipes/LoadingRecipeBox'
import RecipeBox from '../Recipes/RecipeBox'
import { FaHeart } from 'react-icons/fa'
import Recipe from './Recipe'

type Props = {}

function Recipes({ }: Props) {
    const { data: session, status } = useSession()
    const userId = session?.user?.id

    const { data, isLoading, isSuccess } = useGetUserFavRecipesQuery(userId, {
        skip: !userId,
    })
    return (
        <div>
            <h1 className='text-red-500 font-extrabold text-3xl lg:text-4xl flex gap-1 text-start mx-10 py-4'>
                Favorite Recipes<FaHeart />
            </h1>
            <div className='mx-10 flex flex-wrap gap-4'>
                {isLoading && [...Array(20)].map((_, index) => (
                    <LoadingRecipeBox key={index} />
                ))}

                {isSuccess && data.favoriteRecipes.length > 0 ? (
                    data.favoriteRecipes.map((recipe: any) => (
                        <Recipe key={recipe.id} id={recipe.id} />
                    ))
                ) : (
                    <div>No favorite recipes found.</div>
                )}
            </div>
        </div>

    )
}

export default Recipes