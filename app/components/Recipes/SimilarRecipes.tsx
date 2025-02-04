
'use client'
import { useSimilarRecipesQuery } from '@/app/redux/FoodApi'
import React from 'react'
import RecipeBox from './RecipeBox'
import LoadingRecipeBox from './LoadingRecipeBox'

type Props = {
    showMore: boolean,
    id: string
}

function SimilarRecipes({ showMore, id }: Props) {
    const { data, isLoading, isSuccess } = useSimilarRecipesQuery(id)
    console.log(isSuccess ? data : '')
    return (
        <div className='w-full pb-10'>
            <h1 className={'text-red-500 text-2xl font-bold py-2 '}>Similar Recipes</h1>
            <div className={'flex justify-center items-center flex-wrap  mx-auto  gap-4'}>{isSuccess ? data.slice(0, !showMore ? 12 : 100).map((recipe: any, index: any) => {

                return (<RecipeBox key={index} name={recipe.title} image={`https://spoonacular.com/recipeImages/${recipe.id}-312x231.jpg`} description={recipe.summary} time={recipe.readyInMinutes} price={recipe.pricePerServing
                } id={recipe.id} rating={recipe.spoonacularScore}></RecipeBox>)
            })
                : null}
                {isLoading ? [...Array(20)].map((e, index) => {
                    // <LoadingRecipeBox key={index} />
                    return (<LoadingRecipeBox key={index} />)
                }
                ) : null}</div>
        </div>
    )
}

export default SimilarRecipes