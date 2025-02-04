'use client'
import React, { useState } from 'react'
import RecipeBox from '../Recipes/RecipeBox'
import LoadingRecipeBox from '../Recipes/LoadingRecipeBox'
import { SearchBar } from '../searchBar'
import { useComplexSearchQuery } from '@/app/redux/FoodApi'
import { useSearchParams } from 'next/navigation'
import ShowMoreButton from '../Recipes/ShowMoreButton'
import { FaSadTear } from 'react-icons/fa'

function Results() {

    const [showMore, setShowMore] = useState(false)
    const handleShowMore = () => {
        return setShowMore(!showMore)
    }
    const searchParams = useSearchParams()
    const { data, isSuccess, isLoading, isError } = useComplexSearchQuery(searchParams.toString())
    console.log(data)

    return (
        <div className='my-20 min-h-screen'>
            <div className="py-12 text-center">
                <h1 className="text-4xl font-bold  mb-4 bg-gradient-to-r from-red-700 to-red-500 bg-clip-text text-transparent">
                    Find Your Perfect Recipe
                </h1>

                {/* Gradient Text */}
                <p className="text-xl font-medium bg-gradient-to-r from-slate-500 to-slate-400 bg-clip-text text-transparent max-w-2xl mx-auto px-2">
                    {`  Explore hundreds of delicious recipes and cooking tips. Whether you're searching for a quick snack or a gourmet meal, we've got something for everyone.`}
                </p>

            </div>
            <SearchBar />

            {isSuccess && data.results.length > 0 ? (
                <>
                    <h1 className='text-slate-800 font-bold text-3xl text-center my-6'>
                        {data.results.length} recipes found
                    </h1>

                    <div className='mx-auto flex justify-center items-center flex-wrap gap-6'>
                        {data.results.slice(0, !showMore ? 40 : 100).map((recipe: any, index: any) => (
                            <RecipeBox
                                key={index}
                                name={recipe.title}
                                image={recipe.image}
                                description={recipe.summary}
                                time={recipe.readyInMinutes}
                                price={recipe.pricePerServing}
                                id={recipe.id}
                                rating={recipe.spoonacularScore}
                            />
                        ))}
                    </div>

                    {/* Show more button */}
                    {data.results.length >= 40 && (
                        <div className="flex justify-center my-8">
                            <ShowMoreButton onClick={handleShowMore} showMore={showMore} />
                        </div>
                    )}
                </>
            ) : null}

            {/* Loading state */}
            {isLoading && (
                <div className='flex flex-wrap justify-center items-center gap-2 '>
                    {[...Array(20)].map((_, index) => (
                        <LoadingRecipeBox key={index} />
                    ))}
                </div>
            )}

            {/* No results message */}
            {isSuccess && data.results.length === 0 && (
                <div className="flex flex-col justify-center items-center text-center text-gray-500 my-20">
                    <FaSadTear className="text-8xl text-red-500 mb-4" />
                    <h2 className="text-3xl font-semibold mb-2">No recipes found</h2>
                    <p className="text-lg">Try adjusting your search or check back later for more delicious ideas!</p>
                </div>
            )}

            {/* Error state */}
            {isError && (
                <div className="text-center text-red-500 my-6">
                    <p>Something went wrong. Please try again later.</p>
                </div>
            )}
        </div>
    )
}

export default Results
