'use client'
import { useRecipeInfoQuery, useRecipeInstructionsQuery } from '@/app/redux/FoodApi'
import React from 'react'

type Props = {
    id: string
}

function RecipeInstructions({ id }: Props) {
    const { data, isSuccess, isLoading, isError } = useRecipeInstructionsQuery(id)
    console.log(isSuccess ? data[0].steps : '')
    return (
        <>
            <div className='flex flex-col justify-start items-start gap-7 mb-10 '>
                <h1 className='text-xl font-bold text-red-500 py-2 text-start'>Instructions</h1>
                {isSuccess ?
                    data[0].steps.map((step: any) =>
                        <div key={step.number} className={'flex justify-start items-start gap-6'}>
                            <p className='bg-gray-100 rounded-full w-12 h-12 flex justify-center items-center text-red-500 font-extrabold'>{step.number}</p>
                            <p className='text-slate-600 font-medium w-3/4 '>{step.step}</p>
                        </div>
                    )

                    : null}
            </div>
            {isLoading ? <div className='flex flex-col gap-3 mt-10'>
                <div className='flex justify-start items-center gap-2'>
                    <div className="h-20 w-20 bg-gray-300 rounded-full skeleton" />
                    <div className="mt-4 h-6 bg-gray-300 rounded-md skeleton w-3/4" />
                </div>
                <div className='flex justify-start items-center gap-2'>
                    <div className="h-20 w-20 bg-gray-300 rounded-full skeleton" />
                    <div className="mt-4 h-6 bg-gray-300 rounded-md skeleton w-3/4" />
                </div>
                <div className='flex justify-start items-center gap-2'>
                    <div className="h-20 w-20 bg-gray-300 rounded-full skeleton" />
                    <div className="mt-4 h-6 bg-gray-300 rounded-md skeleton w-3/4" />
                </div>
            </div> : null}
        </>
    )
}

export default RecipeInstructions