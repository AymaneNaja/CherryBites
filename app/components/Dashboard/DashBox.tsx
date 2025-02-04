import React from 'react'
import { IconType } from 'react-icons'

type Props = {
    title: string,
    description: string,
    Icon?: any,
    id: number
}

function DashBox({ title, description, Icon }: Props) {
    return (
        <div className='p-4 text-center rounded-xl '>
            <span className={'   flex justify-center items-center text-center text-white scale -translate-y-6'}>
                <p className=' scale-[3] w-fit bg-gradient-to-tr from-red-400 to-red-600 rounded-full p-1 '><Icon scale={20} className={'w-fit'} /></p>
            </span>
            <h1 className='text-red-600 font-extrabold text-center p-2 text-lg'>{title}</h1>
            <p className='text-black '>{description}</p>
        </div>
    )
}

export default DashBox