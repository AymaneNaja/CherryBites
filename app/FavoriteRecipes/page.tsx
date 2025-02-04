import React from 'react'
import Recipes from '../components/FavRecipes/Recipes'

type Props = {}

function page({ }: Props) {
    return (
        <div className='min-h-screen w-11/12 mx-auto mt-10'>

            <Recipes></Recipes>

        </div>
    )
}

export default page