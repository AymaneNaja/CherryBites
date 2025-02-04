'use client'
import { useSession } from 'next-auth/react'; // Assuming you're using next // Adjust the import as necessary
import { FaHeart, FaRegHeart } from 'react-icons/fa'; // Example icons from react-icons
import React, { useState } from 'react';
import { useGetUserFavRecipesQuery, useAddFavRecipeMutation, useDeleteFavRecipeMutation } from '@/app/redux/UserApi';
import Recipe from './Recipe';

interface Props {
    recipeId: number; // Assuming you pass the recipe ID as a prop
}


function FavBtn({ recipeId }: Props) {
    const { data: session, status } = useSession();
    const userId = Number(session?.user?.id)

    // Fetch favorite recipes to check if the current recipe is favorited
    const { data: favRecipes, isLoading, isSuccess } = useGetUserFavRecipesQuery(userId, {
        skip: !userId,
    });

    const [addFavRecipe] = useAddFavRecipeMutation();
    const [deleteFavRecipe] = useDeleteFavRecipeMutation();
    const [isLoadingFav, setIsLoadingFav] = useState(false);


    // Ensure favRecipes is an array or default to an empty array
    const favoriteRecipes = isSuccess && Array.isArray(favRecipes.favoriteRecipes) ? favRecipes.favoriteRecipes : [];

    // Check if the current recipe is in the list of favorite recipes
    const isFavorited = isSuccess && favoriteRecipes.some((recipe: any) => recipe.id === recipeId);

    // Handle click event for the favorite button
    const handleToggleFavorite = async () => {
        setIsLoadingFav(true);

        const data = { userId, id: recipeId }
        if (isFavorited) {
            await deleteFavRecipe(data);
        } else {
            // Add to favorites
            await addFavRecipe(data);
        }
        setIsLoadingFav(false);

    };

    // Show loading state while fetching favorite recipes
    if (isLoading) {
        return <div className=" animate-bounce bg-white p-2 rounded-full">
            <FaHeart size={20} className="text-red-500" />
        </div>
    }

    return (
        <button
            title="Favorite recipe"
            onClick={handleToggleFavorite}
            className={`bg-white p-2 rounded-full transition-transform duration-300 ease-in-out transform ${isFavorited ? 'scale-110 text-red-500' : 'scale-100 text-gray-500'}`}
        >
            {isLoadingFav ? (

                <FaHeart className="text-red-500 animate-spin" />

            ) : (
                isFavorited ? <FaHeart /> : <FaRegHeart />
            )}
        </button>
    );
}

export default FavBtn;