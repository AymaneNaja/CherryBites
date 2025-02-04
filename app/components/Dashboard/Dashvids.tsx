import React from 'react'

import { Dancing_Script, Great_Vibes, Pacifico } from "next/font/google";
const pacifico = Pacifico({
    weight: '400',
    subsets: ['latin'],
})

function Dashvids({ }: any) {
    return (
        <div className='mt-20'>
            <h1 className={`${pacifico.className} text-center font-bold text-black text-3xl`}>Discover the Ease of Using CherryBites.</h1>
            <section className='flex justify-between items-center relative z-10'>
                <div className=' z-0  absolute bg-gradient-to-tr from-white to-gray-100 h-[70%] w-full'></div>
                <div className='p-8 w-[50%] sm:w-[50%] md:w-[37%] lg:w-[37%] xl:w-[37%] mx-auto z-10 md:p-10 lg:p-10 xl:p-10 -translate-x-2'>
                    <div className='p-1 translate-x-2' >
                        <video className='rounded-xl shadow' loop muted autoPlay={true} preload="auto" >
                            <source src="https://assets.mixkit.co/videos/9286/9286-720.mp4" type="video/mp4" />
                            <track

                                src="/path/to/captions.vtt"
                                kind="subtitles"
                                srcLang="en"
                                label="English"
                            />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className='p-1 translate-x-10 z-10'>
                        <video className='rounded-xl shadow' loop muted autoPlay={true} preload="auto" >
                            <source src="https://assets.mixkit.co/videos/42475/42475-720.mp4" type="video/mp4" />
                            <track

                                src="/path/to/captions.vtt"
                                kind="subtitles"
                                srcLang="en"
                                label="English"
                            />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className='p-1  z-10'>
                        <video className='rounded-xl shadow' loop muted autoPlay={true} preload="auto" >
                            <source src="https://assets.mixkit.co/videos/50018/50018-720.mp4" type="video/mp4" />
                            <track

                                src="/path/to/captions.vtt"
                                kind="subtitles"
                                srcLang="en"
                                label="English"
                            />
                            Your browser does not support the video tag.
                        </video>
                    </div>



                </div>
                <div className={`w-6/12 text-sm lg:text-lg xl:text-lg  mx-auto z-10 font-semibold sm:text-base   `}>
                    <p></p>{`Embark on a seamless culinary journey with CherryBites, where simplicity meets sophistication in every recipe. Our website is meticulously designed to ensure that cooking enthusiasts of all levels can navigate effortlessly through a world of flavors and techniques.`}

                    <p className='hidden sm:hidden md:block lg:block xl:block'>{`From the moment you land on CherryBites, you'll find an intuitive interface that guides you through every step. Whether you're searching for a quick weekday dinner or planning an elaborate feast, our user-friendly layout makes finding recipes a breeze.`}</p>
                    <p className='hidden sm:hidden md:hidden lg:block xl:block'>{`Each recipe on CherryBites is crafted with precision, offering clear and concise instructions that eliminate any guesswork. Detailed ingredient lists and step-by-step guidance ensure that you can follow along with confidence, no matter your experience in the kitchen.`}</p></div>
            </section>
        </div>
    )
}

export default Dashvids