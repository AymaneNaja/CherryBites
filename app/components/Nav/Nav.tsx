'use client'
import { Sidebar } from './Sidebar';
import { usePathname } from 'next/navigation'
import React from 'react'
import { TbCherryFilled } from "react-icons/tb";
import { Abril_Fatface } from "next/font/google";
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { FaHeart } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";

type Props = {}

const abril = Abril_Fatface({
    weight: '400',
    subsets: ['latin'],
})
function Nav({ }: Props) {
    const pathname = usePathname()
    const { status, data: session } = useSession()

    return (
        <div className={'w-11/12 mx-auto mt-6 flex justify-between items-center text-black mb-2'}>
            <Sidebar pathname={pathname} abril={abril} />
            <div className={`flex p-2 font-semibold  text-center ${abril.className}`}>
                <h1 className=' first-letter:text-red-600 text-black text-2xl first-letter:font-bold'>Cherry</h1>
                <h1 className=' first-letter:text-red-600 text-black text-2xl first-letter:font-bold'>Bites</h1>

            </div>
            <ul className=' gap-5 font-semibold transition-all cursor-pointer  hidden sm:hidden md:flex lg:flex xl:flex'>
                <li className={`${pathname == '/' ? "text-red-600  " : "text-black hover:text-slate-900"}`}><a href={'/'}>Home</a></li>
                <li className={`${pathname == '/Recipes' ? "text-red-600" : "text-black hover:text-slate-700"}`}><a href={'/Recipes'}>Recipes</a></li>
                <li className={`${pathname == '/About' ? "text-red-600" : "text-black hover:text-slate-700"}`}><a href='/About'>About Us</a></li>
                <li className={`${pathname == '/Contacts' ? "text-red-500" : "text-black hover:text-slate-700"}`}><a href={'/Contacts'}>Contacts</a></li>
            </ul>
            <div>
                {status == "unauthenticated" ? <Link href={'/api/auth/signin'}>
                    <button className={'text-white font-semibold bg-red-600 rounded-full px-6 py-2 hover:bg-red-700  transition-all '} title={'auth'}>
                        signin
                    </button>
                </Link> : null}
                {status === "authenticated" ?
                    <div className="">
                        <div className="dropdown  dropdown-bottom dropdown-left">
                            <div tabIndex={1} role="button" className="btn m-1 first-letter:uppercase avatar online placeholder rounded-full bg-rose-50 text-red-500">{session.user?.name?.slice(0, 2)}</div>
                            <div
                                tabIndex={1}
                                className="dropdown-content card card-compact bg-white   z-[100] w-52 p-2 shadow">
                                <div className="card-body flex-col justify-center items-center">
                                    <h3 className=" text-center text-lg text-red-500 font-bold">{session.user?.name}</h3>
                                    <p className=' text-slate-500 text-center'>{session.user?.email}</p>
                                    <Link href={'/FavoriteRecipes'}><button className="btn hover:bg-white text-red-500 bg-rose-50 w-full mx-auto flex gap-1 " >
                                        <FaHeart />favorite recipes</button></Link>
                                    <button className=" btn hover:bg-white text-red-500 bg-rose-50 w-full mx-auto flex-gap-1" onClick={() => document.getElementById('my_modal_1').showModal()}><FaSignOutAlt />sign out</button>
                                    <dialog id="my_modal_1" className="modal">
                                        <div className="modal-box">
                                            <h3 className="font-bold text-lg text-rose-500 flex gap-1 ">Sign out</h3>
                                            <p className="pt-2 font-semibold">Are you sure you would like to sign out?</p>
                                            <div className="modal-action">
                                                <form method="dialog">
                                                    <button className="btn mx-2 text-red-500 bg-rose-50">cancel</button>
                                                    <button className="btn bg-red-500 text-white " onClick={() => signOut()}>signout</button>
                                                </form>
                                            </div>
                                        </div>
                                    </dialog>


                                </div>
                            </div>
                        </div>

                    </div>
                    : null}
                {status == 'loading' ? <div className={'skeleton w-12 h-12 rounded-full'}></div> : null}
            </div>
        </div>
    )
}

export default Nav