import React from 'react'
import { Link, NavLink } from 'react-router'

const Navbar = () => {
    return (
        <>
            <nav className='sticky top-0 left-0 w-full py-3 shadow-sm shadow-gray-800 bg-gray-900/80 backdrop-blur-2xl'>
                <div className="container flex justify-between items-center">
                    <Link to='/' className='text-2xl font-bold block'>EBT <span className='text-cyan-400'>SHOP</span></Link>
                    <ul className='flex gap-2 md:gap-5'>
                        <li><NavLink to='/' className={({ isActive }) => isActive?'text-cyan-400':'hover:text-cyan-600 duration-300'}>Home</NavLink></li>
                        <li><NavLink to='/shop' className={({ isActive }) => isActive?'text-cyan-400':'hover:text-cyan-600 duration-300'}>Shop</NavLink></li>
                        <li><NavLink to='/offers' className={({ isActive }) => isActive?'text-cyan-400':'hover:text-cyan-600 duration-300'}>Offers</NavLink></li>
                        <li><NavLink to='/about' className={({ isActive }) => isActive?'text-cyan-400':'hover:text-cyan-600 duration-300'}>About us</NavLink></li>
                        <li><NavLink to='/contact' className={({ isActive }) => isActive?'text-cyan-400':'hover:text-cyan-600 duration-300'}>Contact us</NavLink></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar