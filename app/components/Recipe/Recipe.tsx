'use client'
import { IngredientImage } from './ingredientImage';
import { RecipeLabels } from './RecipeLabels';
import RecipeNutrition from './RecipeNutrition';
import { useRecipeInfoQuery } from '@/app/redux/FoodApi'
import { LuSalad } from "react-icons/lu";
import { FaPizzaSlice, FaIceCream, FaFish, FaAppleAlt } from 'react-icons/fa';

import React, { useState } from 'react'
import ReactStars from 'react-stars'
import { RecipeImage } from './RecipeImage'
import RecipeInstructions from './RecipeInstructions';
import FavBtn from './FavBtn';
import SimilarRecipes from '../Recipes/SimilarRecipes';
import ShowMoreButton from '../Recipes/ShowMoreButton';
import RecipeEquipment from './RecipeEquipment';
import Image from 'next/image';
import LoadingRecipe from './LoadingRecipe';

type Props = {
    recipeId: string
}
export type Recipe = {
    title: string,
    id: string,
    image: string,
    servings: number,
    readyInMinutes: string,
    preparationMinutes: string,
    cookingMinutes: string,
    spoonacularScore: string,
    pricePerServing: string,
    cheap: boolean,
    cuisines: [],
    dairyFree: boolean,
    vegan: string,
    whole30: boolean,
    veryPopular: boolean,
    veryHealthy: boolean,
    dishTypes: string[],
    summary: string,
    glutenFree: boolean,
    ketogenic: boolean,
    extendedIngredients: [{
        id: number, image: string, name: string, unit: string, amount: string
    }]


}
type DishType = "Main Course" | "Dessert" | "Salad" | "Seafood" | "Vegetarian" | "Breakfast" | "Snack" | "Side Dish";

// Define the type for the props
interface DishTypeDisplayProps {
    data: {
        dishTypes: DishType[];
    };
}
function capitalizeFirstWords(str) {
    return str
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

const dishTypeIcons: Record<DishType, JSX.Element> = {
    "Main Course": <FaPizzaSlice />,
    "Dessert": <FaIceCream />,
    "Salad": <LuSalad />
    ,
    "Seafood": <FaFish />,
    "Vegetarian": <FaAppleAlt />,
    // Add more mappings as necessary based on Spoonacular data
    "Breakfast": <FaAppleAlt />, // Use an icon that fits best
    "Snack": <FaPizzaSlice />, // Choose an appropriate icon
    "Side Dish": <LuSalad />
    ,
    // Add any additional dish types from Spoonacular
};
function Recipe({ recipeId }: Props) {
    const [showMore, setShowMore] = useState(false)
    const handleShowMore = () => {
        return setShowMore(!showMore)
    }
    const { data, isLoading, isSuccess, isError } = useRecipeInfoQuery(recipeId)
    const [loaded, setLoaded] = useState<boolean>(false)
    const stars: any = Math.round((data?.spoonacularScore / 100) * 5) + 1

    return (
        <div>
            {isSuccess ? <div className={'min-h-screen w-11/12 xl:w-10/12 mx-auto flex justify-start transition-all  gap-2'}>

                <div>
                    <div className='min-h-screen flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row mt-10 '>
                        <section className={'w-full sm:w-full  md:w-2/4 lg:w-2/4 xl:w-2/4 mx-auto flex-col justify-start items-center'}>
                            {/* image */}
                            <RecipeImage recipeId={Number(data.id)} loaded={loaded} setLoaded={setLoaded} image={data.image} />

                            {/* ingredients */}
                            <div className='w-11/12 hidden sm:hidden md:block lg:block xl:block '>
                                <h3 className={'font-bold text-lg text-red-500'}>Ingredients</h3>
                                <ul className=' w-full  text-start mx-auto '>

                                    {data.extendedIngredients.map((ingredient) => <li key={ingredient.id} className='flex justify-between items-center font-semibold w-full text-slate-500 '>
                                        <div className={'flex justify-start items-center gap-1'}>
                                            <IngredientImage ingredient={ingredient} />
                                            <p className={'text-slate-700'}>{ingredient.name}</p>
                                        </div>
                                        <p className={'text-slate-400'}>{ingredient.amount} {ingredient.unit}.</p>

                                    </li>)}
                                </ul>

                            </div>
                            <div className={'w-11/12 hidden sm:hidden md:block lg:block xl:block py-2'}><RecipeEquipment id={data.id} /></div>
                        </section>
                        {/* section 2  */}
                        <section className={'w-full sm:w-full  md:w-2/4 lg:w-2/4 xl:w-2/4  justify-start items-start flex flex-col  px-2'}>
                            {/* title */}
                            <h1 className='text-5xl font-extrabold'>{data.title}</h1>
                            <div className="rating flex items-center gap-2" >
                                <ReactStars count={5} edit={false} value={stars} size={28} color2={'#ffd700'} />
                                <p className={' text-green-500 font-semibold'}>${data.pricePerServing}</p>
                                <p className={'text-slate-500 font-bold '}>per serving</p>
                            </div>

                            <div className='flex justify-start items0-center my-2 gap-2'>
                                {data.vegan ? <RecipeLabels label={"vegan"} /> : null}
                                {data.whole30 ? <RecipeLabels label={'whole30'} /> : null}
                                {data.veryHealthy ? <RecipeLabels label={'very healthy'} /> : null}
                                {data.cheap ? <RecipeLabels label={'cheap'} /> : null}
                                {data.ketogenic ? <RecipeLabels label={'ketogenic'} /> : null}
                                {data.dairyFree ? <RecipeLabels label={'dairy free'} /> : null}

                            </div>
                            <div className='flex flex-wrap gap-2 pb-2 '>
                                {data.dishTypes.map((dishType, index) => (
                                    <span key={index} className='bg-slate-200 text-slate-700 font-bold px-3 py-1 rounded-full text-sm flex items-center gap-1'>
                                        {dishTypeIcons[capitalizeFirstWords(dishType)] || <span></span>}
                                        {dishType}
                                    </span>
                                ))}
                            </div>
                            <ul className={'flex items-center font-semibold text-slate-600 gap-2 ml-2 '}>
                                {data.preparationMinutes && (
                                    <li>
                                        {`Prepared in ${data.preparationMinutes} min`}
                                    </li>
                                )}
                                {data.preparationMinutes && (data.readyInMinutes || data.cookingMinutes) && (
                                    <li>|</li>
                                )}
                                {data.readyInMinutes && (
                                    <li>
                                        {`Ready in ${data.readyInMinutes} min`}
                                    </li>
                                )}
                                {data.readyInMinutes && data.cookingMinutes && (
                                    <li>|</li>
                                )}
                                {data.cookingMinutes && (
                                    <li>
                                        {`Cooked in ${data.cookingMinutes} min`}
                                    </li>
                                )}
                            </ul>
                            {/* nutrition details */}
                            <RecipeNutrition id={data.id} />

                            {/* ingredients */}
                            <div className='w-11/12 block sm:block md:hidden lg:hidden xl:hidden py-2 '>
                                <h3 className={'font-bold text-lg text-red-500'}>Ingredients</h3>
                                <ul className=' w-full  text-start mx-auto '>

                                    {data.extendedIngredients.map((ingredient) => <li key={ingredient.id} className='flex justify-between items-center font-semibold w-full text-slate-500 '>
                                        <div className={'flex justify-start items-center gap-2'}>
                                            <IngredientImage ingredient={ingredient} />
                                            <p className={'text-slate-700'}>{ingredient.name}</p>
                                        </div>
                                        <p className={'text-slate-400'}>{ingredient.amount} {ingredient.unit}.</p>

                                    </li>)}
                                </ul>

                            </div>
                            <div className={'w-11/12 block sm:block md:hidden lg:hidden xl:hidden'}><RecipeEquipment id={data.id} /></div>
                            <RecipeInstructions id={data.id} />

                        </section>
                    </div>
                    <SimilarRecipes showMore={showMore} id={data.id} />
                </div> </div> : null}
            {isLoading ? <LoadingRecipe></LoadingRecipe>
                : null}
        </div>
    )
}

export default Recipe