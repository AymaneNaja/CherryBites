// app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex items-center justify-center min-h-screen ">
            <div className="text-center bg-white p-8 shadow-lg rounded-lg">
                <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
                <p className="text-xl text-slate-700 mb-6">
                    {`Oops! The page you're looking for doesn't exist.`}
                </p>
                <Link href="/">
                    <a className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition">
                        Go to Homepage
                    </a>
                </Link>
            </div>
        </div>
    );
}
