import React from 'react'
import { Link } from 'react-router'
import Navbar from '../../layout/Navbar/Navbar'
import Footer from '../../layout/Footer/Footer'

const NotFound = () => {
    return (
        <div className='flex flex-col min-h-screen bg-slate-950 text-orange-400 font-nunito'>
            <Navbar />
            <div className=" bg-slate-900 flex items-center justify-center px-4 flex-1">
                <div className="text-center">
                    <h1 className="text-9xl font-extrabold text-cyan-400 tracking-widest">
                        404
                    </h1>
                    <p className="text-2xl md:text-3xl text-white mt-4">
                        Oops! Page not found
                    </p>
                    <p className="text-gray-400 mt-2">
                        The page you are looking for doesn't exist or has been moved.
                    </p>
                    <div className="mt-8">
                        <Link
                            to="/"
                            className="inline-block bg-orange-400 text-slate-900 font-semibold px-6 py-3 rounded-md hover:bg-orange-500 transition-all duration-300"
                        >
                            Go Back Home
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default NotFound