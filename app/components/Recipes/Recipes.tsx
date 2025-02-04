'use client'
import React, { useState } from "react";
import Header from "./Header";
import { SearchBar } from "../searchBar";
import RandomRecipes from "./RandomRecipes";
import ShowMoreButton from "./ShowMoreButton";

export function Recipes({

}) {
    const [showMore, setShowMore] = useState(false)
    const handleShowMore = () => {
        return setShowMore(!showMore)
    }
    return <div className='min-h-screen'>
        <Header />
        <div className='text-center w-9/12 mx-auto my-6 grid gap-4 '>
            <h1 className='font-extrabold text-5xl text-red-600 '>Welcome to Cherry Bites!</h1>
            <p className='font-semibold text-lg text-slate-700'>Our recipes use fresh ingredients to create delightful dishes. Enjoy quick dinners, desserts, and snacks with our easy-to-follow instructions.</p>
        </div>
        <div className=' mx-auto flex justify-center items-center flex-wrap gap-4 '>
            <SearchBar />
            <RandomRecipes showMore={showMore} />

        </div>
        <ShowMoreButton showMore={showMore} onClick={handleShowMore} />
    </div>;
}
