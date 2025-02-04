// pages/about.js

import Head from 'next/head';

const About = () => {
    return (
        <div>
            <Head>
                <title>About CherryBites</title>
            </Head>

            {/* Hero section with background image */}
            <div className="bg-gradient-to-r from-red-500 to-red-600 py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl font-extrabold text-white mb-4">
                        Welcome to CherryBites
                    </h1>
                    <p className="text-lg text-white">
                        Your ultimate destination for delicious recipes and culinary inspiration.
                    </p>
                </div>
            </div>

            {/* Main content section */}
            <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        {/* Left column with text */}
                        <div className="text-center md:text-left">
                            <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
                                Our Story
                            </h2>
                            <p className="text-lg text-gray-700 mb-6">
                                At CherryBites, we are passionate about cooking and sharing delicious
                                recipes that anyone can enjoy. Our journey began with a simple idea:
                                to create a platform where food lovers can discover new flavors, learn
                                cooking techniques, and find inspiration for every meal.
                            </p>
                            <p className="text-lg text-gray-700 mb-6">{`
                Whether you're looking for quick weekday dinners, gourmet desserts,
                or healthy snacks, CherryBites offers a diverse collection of recipes
                curated to satisfy your culinary cravings.`}
                            </p>

                            <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
                                What We Offer
                            </h2>
                            <p className="text-lg text-gray-700 mb-6">
                                - A wide range of recipes from international cuisines to comfort foods.
                            </p>
                            <p className="text-lg text-gray-700 mb-6">
                                - Step-by-step instructions that make cooking easy and enjoyable.
                            </p>
                            <p className="text-lg text-gray-700 mb-6">
                                - Tips and tricks to enhance your cooking skills and experiment with
                                new ingredients.
                            </p>
                            <p className="text-lg text-gray-700 mb-6">
                                - Regular updates and seasonal recipes to keep your meals fresh and
                                exciting.
                            </p>
                        </div>

                        {/* Right column with images */}

                    </div>
                </div>
            </div>

            {/* Call to action section */}
            <div className="bg-gradient-to-r from-red-500 to-red-600 py-16 px-4 sm:px-6 lg:px-8 text-center">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-extrabold text-white mb-4">
                        Start Your Culinary Adventure Today
                    </h2>
                    <p className="text-lg text-white mb-6">
                        Join CherryBites and discover a world of flavors right in your kitchen.
                        Explore our collection of recipes, plan your meals, and elevate your
                        cooking skills with us!
                    </p>
                    <button className="bg-white text-red-500 py-3 px-8 rounded-md shadow-md hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-300">
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;
