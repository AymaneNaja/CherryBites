'use client'
import { FiChevronDown } from 'react-icons/fi';

const ShowMoreButton = ({ onClick, showMore }: any) => {
    return (
        <div className="flex justify-center my-10 transition-all">
            <button
                onClick={onClick}
                className="flex items-center justify-center bg-red-600 text-white py-4 font-bold px-6 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
            >
                {!showMore ? 'Show More' : "Show Less"} Recipes <FiChevronDown className="ml-2" />
            </button>
        </div>
    );
};

export default ShowMoreButton;
