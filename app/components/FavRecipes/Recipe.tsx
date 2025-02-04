import { useRecipeInfoQuery } from '@/app/redux/FoodApi'
import React from 'react'
import RecipeBox from '../Recipes/RecipeBox'
import LoadingRecipeBox from '../Recipes/LoadingRecipeBox'

type Props = {
    id: string | number
}

function Recipe({ id }: Props) {
    const { data, isSuccess, isLoading } = useRecipeInfoQuery(id)
    return (
        <div>
            {isSuccess ? <RecipeBox name={data.title} image={data.image} description={data.summary} time={data.readyInMinutes} price={data.pricePerServing
            } id={data.id} rating={data.spoonacularScore}></RecipeBox>
                : null}
            {isLoading ? <LoadingRecipeBox /> : null}
        </div>
    )
}

export default Recipe