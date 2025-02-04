import React from 'react'

type Props = {}

function Header({ }: Props) {
    return (
        <div className='w-full h-72 relative rounded-b-xl'>
            <div style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }} className={' w-full h-full bg-no-repeat bg-cover backdrop-blur relative  bg-center bg-black brightness-75 '} >
                <div className='w-full h-full backdrop-blur-sm bg'></div>
            </div>
            <h1 className='absolute p-16 bottom-0 text-6xl text-white font-extrabold'>Recipes</h1>

        </div>
    )
}

export default Header