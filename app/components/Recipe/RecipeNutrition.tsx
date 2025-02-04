'use client'
import { useRecipeNutritionQuery } from '@/app/redux/FoodApi'
import React from 'react'

type Props = {

    id: string | number,
}
const abbreviations = {
    Calories: 'Cal',
    Fat: 'Fat',
    carbs: 'Carb',
    protein: 'Prot',
    sugar: 'Sugar',
    cholesterol: 'Chol'
};

function RecipeNutrition({ id }: Props) {
    const { data, isSuccess, isLoading, isError } = useRecipeNutritionQuery(id)
    console.log(data)
    return (
        <>
            {isSuccess ?
                <section className={'flex justify-start items-center gap-2 my-6'}>
                    <div className='h-20 w-16 bg-red-100 rounded-full flex flex-col gap-3 justify-center items-center '>
                        <p className={'bg-white rounded-full h-12 w-12 m-auto flex  justify-center items-center translate-y-1 font-semibold  '}>{data.calories}
                        </p>
                        <p className=' text-sm -translate-y-2 font-medium'>cal</p>
                    </div>
                    <div className='h-20 w-16 bg-red-100 rounded-full flex flex-col gap-3 justify-center items-center '>
                        <p className={'bg-white rounded-full h-12 w-12 m-auto flex  justify-center items-center translate-y-1 font-semibold  font-medium'}>{data.fat}
                        </p>
                        <p className=' text-sm -translate-y-2 font-medium'>Fat</p>
                    </div>
                    <div className='h-20 w-16 bg-red-100 rounded-full flex flex-col gap-3 justify-center items-center '>
                        <p className={'bg-white rounded-full h-12 w-12 m-auto flex  justify-center items-center translate-y-1 font-semibold '}>{data.carbs}
                        </p>
                        <p className=' text-sm font-medium -translate-y-2'>carbs</p>
                    </div>
                    <div className='h-20 w-16 bg-red-100 rounded-full flex flex-col gap-3 justify-center items-center '>
                        <p className={'bg-white rounded-full h-12 w-12 m-auto flex  justify-center items-center translate-y-1 font-semibold '}>{data.protein}
                        </p>
                        <p className=' text-sm font-medium -translate-y-2'>pro</p>
                    </div>
                </section>
                : null}
        </>
    )
}

export default RecipeNutrition