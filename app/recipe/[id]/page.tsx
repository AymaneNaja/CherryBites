'use client'
import Recipe from '@/app/components/Recipe/Recipe'
import Image from 'next/image'
import React, { useState } from 'react'
import ReactStars from 'react-stars'

type Props = {
    params: { id: string }
}

function page({ params: { id } }: Props) {

    return (
        <div>
            <Recipe recipeId={id}></Recipe>
        </div>
    )
}

export default page