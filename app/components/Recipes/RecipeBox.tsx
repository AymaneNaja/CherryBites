'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { CiTimer } from "react-icons/ci";
import ReactStars from 'react-stars'



type Props = { name: string, image: string, description: string, time: string, price: number, rating: number, id: string | number }

function RecipeBox({ name, description, image, time, price, rating, id }: Props) {
    const [loaded, setLoaded] = useState<boolean>(false)
    const stars = Math.round((rating / 100) * 5) + 1
    const placeholder: string = 'https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg'

    return (
        <Link href={`/recipe/${id}`}>
            <div className="card card-compact bg-base-100 w-60 shadow-xl hover:brightness-105 cursor-pointer 
        transition-all">
                <figure className='relative transition-all'>
                    {!loaded ? <div className='skeleton w-full  h-40 rounded-b-none absolute'></div> : null}
                    <Image
                        className={"" + loaded ? "opacity-100" : "opacity-0"}
                        onLoad={() => setLoaded(true)}
                        onError={() => setLoaded(false)}
                        width={500}
                        height={500}
                        src={image || placeholder}
                        alt={name}
                        quality={100} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title line-clamp-2 text-red-700 font-bold">{name}</h2>
                    {description ? <p className=' w-full  line-clamp-3'>{description?.replace(/(<([^>]+)>)/gi, "")}</p> : null}
                    {/* rating */}
                    {rating ? <div className="rating scale-75 justify-start -translate-x-7" >
                        <ReactStars count={5} edit={false} value={stars} size={28} color2={'#ffd700'} />
                    </div> : null}
                    {/* time to cook */}
                    {time ? <div className='flex justify-between items-center gap-1 text-black font-semibold mt-10'>
                        <div className={'flex items-center justify-start'}>
                            <CiTimer size={18} />
                            <p className='p-1'>{time} min</p>
                        </div>

                    </div> : null}
                </div>
            </div></Link>
    )
}

export default RecipeBox