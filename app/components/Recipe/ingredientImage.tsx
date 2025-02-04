'use client'
import Image from 'next/image';
import { useState } from 'react';
export function IngredientImage({ ingredient }: any) {
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    if (hasError) return <div className={'w-10 h-10 p-1'}></div>

    return <div className="relative">
        {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="loading loading-spinner loading-lg"></span> {/* DaisyUI spinner */}
            </div>
        )}
        <Image width={40} height={40} title={ingredient.name} className={' p-1  '} src={`https://spoonacular.com/cdn/ingredients_250x250/${ingredient.image}`} alt={''}
            onError={() => setHasError(true)}
            onLoad={() => setIsLoading(false)}
        />
    </div>
}
