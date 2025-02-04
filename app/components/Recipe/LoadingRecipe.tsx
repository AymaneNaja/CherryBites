import React from 'react'
import LoadingRecipeBox from '../Recipes/LoadingRecipeBox'

type Props = {}

function LoadingRecipe({ }: Props) {
    return (
        <div className={'flex flex-col min-h-screen '}>
            <div className=" w-full flex gap-2 flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row  transition-all  ">
                <section className='w-full sm:w-full md:w-2/4 lg:w-2/4 xl:w-2/4 p-4'>
                    {/* image */}
                    <div className=" h-72 bg-gray-300 rounded-md w-full  skeleton"></div>
                    {/* ingredients */}
                    <div className={'flex-col gap-2 justify-start hidden sm:hidden md:flex lg:flex xl:flex '}>
                        <div className={'flex justify-between items-center '}>
                            <div className="mt-4 h-6 bg-gray-300 rounded-md skeleton w-2/4"></div>
                            <div className="mt-4 h-6 bg-gray-300 rounded-md skeleton w-1/5"></div>
                        </div>
                        <div className={'flex justify-between items-center '}>
                            <div className="mt-4 h-6 bg-gray-300 rounded-md skeleton w-2/5"></div>
                            <div className="mt-4 h-6 bg-gray-300 rounded-md skeleton w-1/5"></div>
                        </div>
                        <div className={'flex justify-between items-center '}>
                            <div className="mt-4 h-6 bg-gray-300 rounded-md skeleton w-3/5"></div>
                            <div className="mt-4 h-6 bg-gray-300 rounded-md skeleton w-1/5"></div>
                        </div>
                        <div className={'flex justify-between items-center '}>
                            <div className="mt-4 h-6 bg-gray-300 rounded-md skeleton w-2/4"></div>
                            <div className="mt-4 h-6 bg-gray-300 rounded-md skeleton w-1/5"></div>
                        </div>
                    </div>

                </section>
                <section className='w-full sm:w-full md:w-2/4 lg:w-2/4 xl:w-2/4 p-4'>
                    {/* title */}
                    <div className="mt-4 h-6 bg-gray-300 rounded-md skeleton w-3/4">
                    </div>
                    <div className="mt-4 h-6 bg-gray-300 rounded-md skeleton w-3/4">
                    </div>
                    <div className="mt-4 h-6 bg-gray-300 rounded-md skeleton w-2/4">
                    </div>
                    {/*price rating  */}
                    <div className="mt-4 flex space-x-2">
                        <div className="h-4 w-24 bg-gray-300 rounded-md skeleton"></div>
                        <div className="h-4 w-14 bg-gray-300 rounded-md skeleton"></div>
                    </div>
                    {/* tags */}

                    <div className="mt-6 flex space-x-4">
                        <div className="h-10 w-32 bg-gray-300 rounded-full skeleton"></div>
                        <div className="h-10 w-24 bg-gray-300 rounded-full skeleton"></div>
                    </div>
                    {/* recipe type */}
                    <div className="mt-6 flex space-x-2">
                        <div className="h-10 w-24 bg-gray-300 rounded-full skeleton"></div>
                        <div className="h-10 w-24 bg-gray-300 rounded-full skeleton"></div>
                        <div className="h-10 w-24 bg-gray-300 rounded-full skeleton"></div>
                    </div>
                    {/* nutrition */}
                    <div className="mt-6 flex space-x-2">
                        <div className="   h-20 w-16 bg-gray-300 rounded-full skeleton"></div>
                        <div className="   h-20 w-16 bg-gray-300 rounded-full skeleton"></div>
                        <div className="   h-20 w-16 bg-gray-300 rounded-full skeleton"></div>
                        <div className="   h-20 w-16 bg-gray-300 rounded-full skeleton"></div>
                        <div className="   h-20 w-16 bg-gray-300 rounded-full skeleton"></div>
                    </div>
                    {/* ingredients */}
                    <div className={'flex-col gap-2 justify-start flex sm:hidden md:hid lg:hidden xl:hidden my-4'}>
                        <div className={'flex justify-between items-center '}>
                            <div className="mt-4 h-6 bg-gray-300 rounded-md skeleton w-2/4"></div>
                            <div className="mt-4 h-6 bg-gray-300 rounded-md skeleton w-1/5"></div>
                        </div>
                        <div className={'flex justify-between items-center '}>
                            <div className="mt-4 h-6 bg-gray-300 rounded-md skeleton w-2/5"></div>
                            <div className="mt-4 h-6 bg-gray-300 rounded-md skeleton w-1/5"></div>
                        </div>
                        <div className={'flex justify-between items-center '}>
                            <div className="mt-4 h-6 bg-gray-300 rounded-md skeleton w-3/5"></div>
                            <div className="mt-4 h-6 bg-gray-300 rounded-md skeleton w-1/5"></div>
                        </div>
                        <div className={'flex justify-between items-center '}>
                            <div className="mt-4 h-6 bg-gray-300 rounded-md skeleton w-2/4"></div>
                            <div className="mt-4 h-6 bg-gray-300 rounded-md skeleton w-1/5"></div>
                        </div>
                    </div>
                    {/* instructions */}
                    <div className='flex flex-col gap-3 mt-10'>
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
                    </div>
                </section>
                {/* Skeleton for similar recipes */}
            </div>

        </div>

    )
}

export default LoadingRecipe