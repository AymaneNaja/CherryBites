import React from 'react'

type Props = {}

function LoadingRecipeBox({ }: Props) {
    return (
        <div className="flex w-52 flex-col  shadow  rounded-xl  gap-4 pb-4">
            <div className="skeleton h-32 w-full rounded-b-none"></div>
            <div className="skeleton h-4 w-28 ml-1"></div>
            <div className="skeleton h-4 w-11/12 ml-1"></div>
            <div className="skeleton h-4 w-11/12 ml-1"></div>
        </div>
    )
}

export default LoadingRecipeBox