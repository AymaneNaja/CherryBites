'use client'
import React, { useState } from 'react'

type Props = {}

function Newsletter({ }: Props) {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // You can add your subscription logic here, e.g., send the email to your backend
        console.log(`Subscribing email: ${email}`);
        // Reset email state after submission
        setEmail('');
    };

    const handleChange = (e: any) => {
        setEmail(e.target.value);
    };
    return (
        <div className="bg-gradient-to-r from-red-500 to-red-700 py-10 w-11/12 p-10 rounded-xl mx-auto my-10" >
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center">
                    <h2 className="text-3xl font-bold text-white">Subscribe to Stay Updated on Recipes</h2>
                </div>
                <p className="text-center text-white mt-4">
                    Join our newsletter to receive the latest updates on mouthwatering recipes, cooking tips,
                    and special offers from CherryBites!
                </p>
                <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row items-center justify-center">
                    <input
                        type="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="Your email address"
                        required
                        className="py-3 px-4 sm:mr-4 bg-red-700 placeholder:text-white  rounded-md  focus:outline-none focus:ring-2 focus:ring-red-300 text-white"
                    />
                    <button
                        type="submit"
                        className="mt-4 sm:mt-0 py-3 px-6 sm:px-8 bg-white text-red-500 rounded-md shadow-md hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-300"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Newsletter