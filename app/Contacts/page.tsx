import React from 'react'

// pages/contacts.js

import Head from 'next/head';
import { FiMail, FiPhone, FiMapPin, FiInstagram, FiTwitter } from 'react-icons/fi'; // Import icons from react-icons library

const page = () => {
    return (
        <div>
            <Head>
                <title>Contact Us - CherryBites</title>
            </Head>

            {/* Hero section with red gradient background */}
            <div className="bg-gradient-to-r from-red-500 to-red-600 py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl font-extrabold text-white mb-4">
                        Contact Us
                    </h1>
                    <p className="text-lg text-white">
                        {`We'd love to hear from you! Get in touch using any of the methods below.`}
                    </p>
                </div>
            </div>

            {/* Main content section */}
            <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Email contact */}
                        <div className="flex items-center bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="p-4 bg-red-500 text-white flex items-center justify-center">
                                <FiMail className="text-4xl" />
                            </div>
                            <div className="px-6 py-4">
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">Email Us</h2>
                                <p className="text-gray-700">
                                    Drop us an email at <a href="mailto:cherrybites@gmail.com" className="text-red-500">cherrybites@gmail.com</a> and we'll get back to you soon!
                                </p>
                            </div>
                        </div>

                        {/* Phone contact */}
                        <div className="flex items-center bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="p-4 bg-red-500 text-white flex items-center justify-center">
                                <FiPhone className="text-4xl" />
                            </div>
                            <div className="px-6 py-4">
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">Call Us</h2>
                                <p className="text-gray-700">
                                    Need immediate assistance? Give us a call at <span className="text-red-500">+1 (123) 456-7890</span>.
                                </p>
                            </div>
                        </div>

                        {/* Address/contact */}
                        <div className="flex items-center bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="p-4 bg-red-500 text-white flex items-center justify-center">
                                <FiMapPin className="text-4xl" />
                            </div>
                            <div className="px-6 py-4">
                                <h2 className="text-2xl font-bold text-gray-800 mb-2">Visit Us</h2>
                                <p className="text-gray-700">
                                    Come say hello at:<br />
                                    123 Cherry Blossom Lane,<br />
                                    Cityville, State 12345
                                </p>
                            </div>
                        </div>

                        {/* Social media contacts */}
                        <div className="flex items-center bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="p-4 bg-red-500 text-white flex items-center justify-center">
                                Social Media
                            </div>
                            <div className="px-6 py-4 flex items-center">
                                <a href="#" className="text-gray-700 hover:text-red-500 mr-4">
                                    <FiInstagram className="text-2xl" />
                                </a>
                                <a href="#" className="text-gray-700 hover:text-red-500">
                                    <FiTwitter className="text-2xl" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
