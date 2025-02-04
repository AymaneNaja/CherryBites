'use client'
import { validateUserInput } from "@/lib/auth";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import React, { useState } from "react";
import { MdErrorOutline } from "react-icons/md";
import { z } from "zod"
export function Signup({ }) {
    const { data: session, status } = useSession()

    const router = useRouter()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPassword] = useState<string>('')
    const [validationErrors, setValidationErrors] = useState([]);

    const [error, setError] = useState<any>('')
    const [loading, setLoading] = useState(false)
    const ErrorDisplay = ({ errors }: any) => {
        if (!errors || errors.length === 0) {
            return null;
        }

        return (
            <div className="mt-2 text-red-600">
                <ul>
                    {errors.map((error: any, index: any) => (
                        <li key={index} className="  my-2   text-red-500 font-semibold">
                            _{error.message}.
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    async function handleSignup() {
        setLoading(true)

        const credentials = { name, email, password }
        if (credentials.password !== confirmPass) {
            setLoading(false)

            return setError(`passwords don't match , please try again...`)

        }

        const postNewUser = await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify(credentials)
        })
        const res = await postNewUser.json()
        if (res.ok) {
            setLoading(false)
            setError('')
            return router.replace('/')
        }
        else if (!res.ok) {
            setLoading(false)
            Object.keys(res).includes('errors') ? setValidationErrors(res.errors) : null
            setError(res.message)
        }
        setLoading(false)
    }

    return <>
        {status === "unauthenticated" ? <div className="hero bg-base-100 min-h-screen mt-6 ">
            <div className="absolute w-full h-full bg-cover bg-center   " style={{ backgroundImage: `url(https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)` }}></div>
            <div className="absolute h-full w-full bg-black opacity-25"></div>
            <div className="hero-content flex-col justify-center items-center text-center">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl text-white font-bold  text-center">Welcome to CherryBites Sign up Here</h1>
                    <p className="py-8 w-10/12 mx-auto text-center font-semibold text-white">
                        save your favorite dishes, and explore new culinary inspirations. Your culinary journey is just a click away...
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body">
                        <div className="form-control">
                            <h1 className='font-extrabold text-center text-3xl text-red-500 py-6'>CherryBites</h1>
                            {error.length >= 1 ? <p className="w-11/12  text-red-500 my-2 text-start mx-auto font-semibold  ">
                                {validationErrors.length >= 1 ? <ErrorDisplay errors={validationErrors} /> : null}
                                <p className={'flex justify-start items-start '}>_{error}.</p>
                            </p> : null}
                            <label className="label">
                                <span className="label-text text-red-600 font-bold">Name</span>
                            </label>
                            <input
                                onChange={(e) => setName(e.target.value)}
                                type={'text'} placeholder="name" className="input input-bordered" required />

                            <label className="label">
                                <span className="label-text text-red-600 font-bold">Email</span>
                            </label>
                            <input
                                onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-red-600 font-bold">Password</span>
                            </label>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <span className="label-text text-red-600 font-bold">Confirm Password</span>
                            </label>
                            <input onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="confirm password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button title={'log in'} disabled={loading ? true : false} className={`btn font-bold hover:bg-white hover:text-red-500   ${!loading ? " bg-red-600 text-white  ring-red-500 outline-red-600" : " bg-white disabled:text-red-500 disabled:bg-white text-red-500  "}`} onClick={(e) => {
                                e.preventDefault();
                                handleSignup()
                            }}>Login
                                {loading ? <span className="loading loading-spinner text-error"></span>
                                    : null}
                            </button>
                        </div>
                        <div className={'form-control mt-3 flex  text-base'}>
                            <p>{`already have an account?`} <a href={'/api/auth/signin'} className='text-red-500 link '>sign in</a></p>

                        </div>
                    </form>
                </div>
            </div>
        </div> : null}
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
        {status === "loading" ? <div className={'min-h-screen w-full   flex justify-center items-center'}>
            <span className="loading loading-spinner text-error loading-lg"></span>

        </div> : null}

    </>
}
