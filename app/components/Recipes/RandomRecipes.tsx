'use client'
import { useRandomRecipeQuery } from '@/app/redux/FoodApi'
import React from 'react'
import RecipeBox from './RecipeBox'
import LoadingRecipeBox from './LoadingRecipeBox'

type Props = {
    showMore: boolean
}

function RandomRecipes({ showMore }: Props) {
    const { data, isLoading, isSuccess } = useRandomRecipeQuery('')
    return (
        <div className=' mx-auto flex justify-center items-center flex-wrap gap-4'>
            {isSuccess ? data.recipes.slice(0, !showMore ? 40 : 100).map((recipe: any, index: any) => {

                return (<RecipeBox key={index} name={recipe.title} image={recipe.image} description={recipe.summary} time={recipe.readyInMinutes} price={recipe.pricePerServing
                } id={recipe.id} rating={recipe.spoonacularScore}></RecipeBox>)
            })
                : null}
            {isLoading ? [...Array(20)].map((e, index) => {
                // <LoadingRecipeBox key={index} />
                return (<LoadingRecipeBox key={index} />)
            }
            ) : null}
        </div>
    )
}

export default RandomRecipes