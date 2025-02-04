'use client'
import { Spinner } from '@nextui-org/react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { signOut } from "next-auth/react";
import { MdErrorOutline } from "react-icons/md";

type Props = {}

function Signin({ }: Props) {
    const { data: session, status } = useSession()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    async function handleSignin() {
        setLoading(true)
        try {
            const res = await signIn('credentials', { email, password, redirect: false })
            if (res?.ok && res.error == null) {
                return router.replace('/')
            }
            else if (res?.error) {
                throw new Error('User not found,please check you credentials')
            }
            setLoading(false)
        } catch (error: any) {
            setLoading(false)
            setError(error.message)
            setTimeout(() => setError(''), 3000)
        }
    }
    return (
        <>
            {status === "authenticated" ? <div className="flex items-center justify-center min-h-screen bg-slate-100">
                <div className="text-center bg-white p-8 shadow-lg rounded-lg">
                    <h1 className="text-3xl font-bold text-red-600 mb-6">
                        Are you trying to sign out?
                    </h1>
                    <div className="space-x-4">
                        <button
                            onClick={() => router.back()}
                            className="px-4 py-2 bg-slate-500 text-white rounded-md hover:bg-slate-600 transition"
                        >
                            Go Back
                        </button>
                        <button
                            onClick={() => signOut()}
                            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
                        >
                            Sign Out
                        </button>
                    </div>
                </div>
            </div> : null}
            {status === "unauthenticated" ?
                <div className="hero bg-base-200 min-h-screen mt-6">
                    <div className="absolute w-full h-full bg-cover bg-center   " style={{ backgroundImage: `url(https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)` }}></div>
                    <div className="absolute h-full w-full bg-black opacity-25"></div>
                    <div className="hero-content flex-col justify-center items-center text-center">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold text-white text-center">Login now!</h1>
                            <p className="py-8 w-10/12 mx-auto text-white font-medium text-center">
                                Log in to access your personalized recipe collections, save your favorite dishes, and explore new culinary inspirations. Your culinary journey is just a click away
                            </p>
                        </div>
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <form className="card-body">
                                <div className="form-control">
                                    <h1 className='font-extrabold text-center text-3xl text-red-500 py-6'>CherryBites</h1>
                                    {error.length >= 1 ? <p className="w-11/12  text-red-500 my-2 text-start flex mx-auto font-semibold items-center ">
                                        _{error}</p> : null}

                                    <label className="label">
                                        <span className="label-text text-red-600 font-bold">Email</span>
                                    </label>
                                    <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-red-600 font-bold">Password</span>
                                    </label>
                                    <input
                                        onChange={(e) => setPassword(e.target.value)}
                                        type="password" placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover text-red-500">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button title={'log in'} disabled={loading ? true : false} className={`btn font-bold hover:bg-white hover:text-red-500   ${!loading ? " bg-red-600 text-white  ring-red-500 outline-red-600" : " bg-white disabled:text-red-500 disabled:bg-white text-red-500  "}`} onClick={(e) => {
                                        e.preventDefault();
                                        handleSignin()
                                    }}>Login
                                        {loading ? <span className="loading loading-spinner text-error"></span>
                                            : null}
                                    </button>
                                </div>
                                <div className={'form-control mt-3 flex  text-base'}>
                                    <p>{`Don't have an Account?`} <a href={'/auth/signup'} className='text-red-500 link '>sign up</a></p>

                                </div>
                            </form>
                        </div>
                    </div >
                </div > : null}
            {status === "loading" ?
                <div className={'min-h-screen w-full   flex justify-center items-center'}>
                    <span className="loading loading-spinner text-error loading-lg"></span>

                </div> : null}

        </>
    )
}

export default Signin