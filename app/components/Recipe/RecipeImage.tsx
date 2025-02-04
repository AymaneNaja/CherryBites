import Image from "next/image";
import React from "react";
import FavBtn from "./FavBtn";
export function RecipeImage({
    loaded,
    setLoaded,
    image,
    recipeId
}: { recipeId: number, image: string, loaded: boolean, setLoaded: React.Dispatch<React.SetStateAction<boolean>> }) {
    return <div className="w-11/12 relative ">
        <Image className={`rounded-xl w-full  mb-4     ${loaded ? "opacity-100" : "opacity-0"}`} onLoad={() => setLoaded(true)} onError={() => setLoaded(false)} width={500} height={500} src={image} alt={'...'} quality={100} />
        {loaded ? <div className='absolute top-4 right-4'><FavBtn recipeId={recipeId}></FavBtn></div> : null}
    </div>
}
