'use client'
import { RangeSlider } from './RangeSlider';
import { FilterSelectOption } from './FilterSelectOption';

import { HiOutlineAdjustments } from "react-icons/hi";
import { Slider } from "@nextui-org/slider";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaSearch } from "react-icons/fa";
import { useAutocomplete } from '@nextui-org/react';
import { useAutocompleteQuery } from '../redux/FoodApi';
import Image from 'next/image';

const filter: any = {
    cuisine: [
        "Any",

        "African",
        "American",
        "British",
        "Cajun",
        "Caribbean",
        "Chinese",
        "Eastern European",
        "European",
        "French",
        "German",
        "Greek",
        "Indian",
        "Irish",
        "Italian",
        "Japanese",
        "Jewish",
        "Korean",
        "Latin American",
        "Mediterranean",
        "Mexican",
        "Middle Eastern",
        "Nordic",
        "Southern",
        "Spanish",
        "Thai",
        "Vietnamese"
    ],
    diet: [
        "Any",

        "Gluten Free",
        "Ketogenic",
        "Vegetarian",
        "Lacto-Vegetarian",
        "Ovo-Vegetarian",
        "Vegan",
        "Pescetarian",
        "Paleo",
        "Primal",
        "Low FODMAP",
        "Whole30"
    ]
    ,
    intolerances: [
        "None",

        "Dairy",
        "Egg",
        "Gluten",
        "Grain",
        "Peanut",
        "Seafood",
        "Sesame",
        "Shellfish",
        "Soy",
        "Sulfite",
        "Tree Nut",
        "Wheat"
    ]
    ,
    type: [
        "Any",
        "Main Course",
        "Side Dish",
        "Dessert",
        "Appetizer",
        "Salad",
        "Bread",
        "Breakfast",
        "Soup",
        "Beverage",
        "Sauce",
        "Marinade",
        "Fingerfood",
        "Snack",
        "Drink"
    ]
    ,
    minCarbs: 10,
    maxCarbs: 100,
    minProtein: 10,
    maxProtein: 100,
    minCalories: 10,
    maxCalories: 800,
    minFat: 1,
    maxFat: 100,
    maxReadyTime: 120,
}



export function SearchBar({

}) {
    const router = useRouter()
    const [cuisine, setCuisine] = useState('')
    const [type, setType] = useState('')
    const [diet, setDiet] = useState('')
    const [intolerances, setIntolerances] = useState('')
    const [query, setQuery] = useState('')
    const [maxCarbs, setMaxCarbs] = useState(filter.maxCarbs / 2)
    const [maxProtein, setMaxProtein] = useState(filter.maxProtein / 2)
    const [maxFat, setMaxFat] = useState(filter.maxFat / 2)
    const [maxCalories, setMaxCalories] = useState(filter.maxCalories / 2)
    const [maxReadyTime, setReadyTime] = useState(45)
    function SearchParameters() {
        const queryParams: any = new URLSearchParams({ query, maxCarbs, maxProtein, maxFat, maxCalories, maxReadyTime, cuisine, type, diet, intolerances })
        const newUrl = `search/?${queryParams}`
        return router.push(newUrl), router.refresh()

    }
    // image handeling for search suggestion
    const [loadingImages, setLoadingImages] = useState({});
    const handleImageLoad = (id) => {
        setLoadingImages((prevState) => ({
            ...prevState,
            [id]: false, // Set loading to false after the image has loaded
        }));
    };
    //   
    const { data: suggestions, isLoading, isSuccess, isError } = useAutocompleteQuery(query)

    return <label className="input input-bordered flex items-center gap-2 w-9/12 xl:w-2/4 lg:w-2/4 md:w-2/4 sm:w-9/12 mx-auto mb-10 relative">
        <input value={query} onChange={(e) => setQuery(e.target.value)} type="text" className="grow" placeholder="Search for recipes, ingredients, or cooking tips... " />

        <button onClick={() => SearchParameters()} title={'search'} className={'text-white bg-red-600 hover:bg-red-700 transition-all p-2 rounded-lg  '}>
            <FaSearch />
        </button>
        {isSuccess && suggestions.length > 0 && (
            <ul className="absolute top-14 left-0 w-full bg-base-100 rounded-box shadow-lg z-10">
                {suggestions.map((suggestion: any) => (
                    <li
                        key={suggestion.id}
                        className="p-3 hover:bg-gray-100 cursor-pointer flex items-center space-x-4"
                        onClick={() => {
                            setQuery(suggestion.title)
                            router.replace(`recipe/${suggestion.id}`)
                        }} // Fill the input with selected suggestion
                    >
                        {/* Displaying the image with Next.js Image component and loading spinner */}
                        <div className="relative w-10 h-10">
                            {loadingImages[suggestion.id] !== false && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="loading loading-spinner loading-xs"></span>
                                </div>
                            )}
                            <Image
                                src={` https://img.spoonacular.com/recipes/${suggestion.id}-556x370.jpg`}
                                alt={''}
                                className=""
                                width={50}
                                height={50}
                                onLoadingComplete={() => handleImageLoad(suggestion.id)}
                            />
                        </div>
                        <span>{suggestion.title}</span>
                    </li>
                ))}
            </ul>
        )}
        {/* filter pop up */}
        <button title={'popup'} className=" hover:bg-slate-100 bg-slate-50 p-2 rounded-lg transition-all" onClick={() => document.getElementById('my_modal_2').showModal()}><HiOutlineAdjustments size={20} /></button>
        <dialog id="my_modal_2" className="modal">
            <div className="modal-box h-96">
                <h1 className={'text-red-500 font-bold text-center py-2 text-3xl'}>Filters</h1>
                <FilterSelectOption title={'Cuisine'} data={filter.cuisine} setState={setCuisine} />
                <FilterSelectOption title={'Type'} data={filter.type} setState={setType} />
                <FilterSelectOption title={'Diet'} data={filter.diet} setState={setDiet} />
                <FilterSelectOption title={'Intolerances'} data={filter.intolerances} setState={setIntolerances} />

                <div>
                    {/*  calories*/}
                    <RangeSlider title='Max Calories' max={filter.maxCalories} min={filter.minCalories} value={maxCalories} setValue={setMaxCalories} />
                    {/*  carbs*/}
                    <RangeSlider title='Max Carbohydrates' max={filter.maxCarbs} min={filter.minCarbs} value={maxCarbs} setValue={setMaxCarbs} />
                    {/*Fat*/}
                    <RangeSlider title='Max Fat' max={filter.maxFat} min={filter.minFat} value={maxFat} setValue={setMaxFat} />
                    {/*protein*/}
                    <RangeSlider title='Max proteins' max={filter.maxProtein} min={filter.minProtein} value={maxProtein} setValue={setMaxProtein} />
                    {/*time*/}
                    <RangeSlider title='preperation time' max={filter.maxReadyTime} min={filter.MaxReadyTime} value={maxReadyTime} setValue={setReadyTime} />


                </div>

            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>

    </label>;
}
