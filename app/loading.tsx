'use client'
import { Spinner } from '@nextui-org/react'
import React from 'react'

type Props = {}

function loading({ }: Props) {
    return (
        <div className={'min-h-screen w-full   flex justify-center items-center'}>
            <span className="loading loading-spinner text-error loading-lg"></span>

        </div>
    )
}

export default loading