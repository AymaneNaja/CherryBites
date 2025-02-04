'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

export default function Error({ error, reset }: any) {
    const router = useRouter()
    return (
        <div className="flex flex-col justify-center items-center h-screen  text-white text-center min-h-screen">
            <h1 className="text-6xl text-red-600 font-bold mb-4">Oops!</h1>
            <p className="text-lg mb-8 text-gray-700">
                {`Something went wrong. The page you're looking for isn't available right now.`}
            </p>
            <button
                className="px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-300"
                onClick={() => router.replace('/')}
            >
                Go to Homepage
            </button>
        </div>
    );
}
