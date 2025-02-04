'use client'
import { useRecipeEquimentQuery } from '@/app/redux/FoodApi';
import React from 'react';

// Function to generate Spoonacular image URL for the equipment
const getEquipmentImageUrl = (equipmentName: any) => {
    const formattedName = equipmentName
        .toLowerCase()
        .replace(/ /g, '-'); // Replace spaces with hyphens
    return `https://spoonacular.com/cdn/equipment_100x100/${formattedName}.png`;
};

const RecipeEquipment = ({ id }: any) => {
    const { data, isLoading, isSuccess } = useRecipeEquimentQuery(id)

    return (
        <>
            {isSuccess ? <div className={'py-2'}>
                <h1 className={'text-red-500 font-bold text-lg pb-2 '}>Equipent</h1>
                <div className={'flex justify-start items-center gap-2 flex-wrap '}>{data.equipment.map((equipment: any, index) => <div key={index} className="flex flex-col items-center p-4 border shadow-md rounded-lg bg-white">
                    <img
                        src={`https://spoonacular.com/cdn/equipment_100x100/${equipment.image}`}
                        alt={''}
                        className="w-20 h-20 object-contain mb-2"
                    // Fallback for missing images
                    />
                    <span className="text-lg font-semibold capitalize text-gray-700">
                        {equipment.name}
                    </span>
                </div>)}</div>
            </div> : null}</>


    );
};

export default RecipeEquipment;
