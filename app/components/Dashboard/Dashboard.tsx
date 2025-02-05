'use client'
import React from 'react'
import salad from '../../../Images/plate.png'
import Image from 'next/image'
type Props = {}

function Dashboard({ }: Props) {
    return (
        <div className=' flex-col flex sm:flex-row-reverse md:flex-row-reverse lg:flex-row-reverse xl:flex-row-reverse  justify-between items-center mt-20 w-11/12 mx-auto '>
            {/* description */}
            {/* photo */}
            <div className="relative sm:w-2/4 w-11/12 mx-auto overflow-hidden">
  <Image
    src={salad.src}
    alt="alt"
    width={1500}
    height={1500}
    className="spin-and-shine rounded-lg "
  />
</div>

            <div className='w-11/12 sm:w-2/4 mx-auto flex flex-col gap-4'>
                <p className='lg:text-7xl xl:text-7xl md:text-5xl  text-5xl  text-black font-semibold'>{`it's not just Food,it's an Expirence.`}</p>
                {/* buttons */}
                <div className='flex justify-start gap-4 items-center transition-all '>
                    <button className='px-6 py-3 text-white font-bold bg-red-600 hover:bg-red-700 rounded-full' title={'menu'}>Check Menu!</button>
                    <button className='px-8 py-3 text-black font-bold bg-slate-100 hover:bg-slate-200 rounded-full' title={'aboutus'}>About Us</button>
                </div>
                {/* reviews */}
                <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                    <div className="avatar">
                        <div className="w-12">
                            <img alt='' src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fHww" />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-12">
                            <img alt='' src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlfGVufDB8fDB8fHww" />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-12">
                            <img alt='' src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D" />
                        </div>
                    </div>
                    <div className="avatar placeholder">
                        <div className="bg-neutral text-neutral-content w-12">
                            <span>+99</span>
                        </div>
                    </div>
                </div>
                {/* ratings */}
                <div className="rating " >
                    <input title='rating' type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" readOnly />
                    <input title='rating'
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-yellow-400"
                        readOnly />
                    <input title='rating' type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" readOnly />
                    <input title='rating' type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" readOnly />
                    <input title='rating' type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-400" defaultChecked readOnly />
                </div>

            </div>

        </div>
    )
}

export default Dashboard