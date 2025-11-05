import React from 'react'
import { Link, NavLink } from 'react-router'

const Footer = () => {
    return (
        <>
            <footer className=' bg-slate-900'>
                <div className="container">
                    <div className="flex justify-between flex-col md:flex-row pt-10">
                        <div className="md:w-1/2 space-y-4">
                            <Link to='/' className='text-2xl font-bold block'>EBT <span className='text-cyan-400'>SHOP</span></Link>
                            <p className='text-orange-400/60'>Welcome to EBT SHOP — your trusted online marketplace for quality products at the best prices.
                                At EBT SHOP, we’re passionate about making your shopping experience simple, secure, and enjoyable. From trendy fashion and modern gadgets to home essentials and lifestyle products, we bring everything you need — all in one place.</p>
                        </div>
                        <div className="md:w-1/2">
                            <ul className='flex gap-2 md:gap-5 justify-end'>
                                <li><NavLink to='/' className={({ isActive }) => isActive ? 'text-cyan-400' : 'hover:text-cyan-600 duration-300'}>Home</NavLink></li>
                                <li><NavLink to='/shop' className={({ isActive }) => isActive ? 'text-cyan-400' : 'hover:text-cyan-600 duration-300'}>Shop</NavLink></li>
                                <li><NavLink to='/offers' className={({ isActive }) => isActive ? 'text-cyan-400' : 'hover:text-cyan-600 duration-300'}>Offers</NavLink></li>
                                <li><NavLink to='/about' className={({ isActive }) => isActive ? 'text-cyan-400' : 'hover:text-cyan-600 duration-300'}>About us</NavLink></li>
                                <li><NavLink to='/contact' className={({ isActive }) => isActive ? 'text-cyan-400' : 'hover:text-cyan-600 duration-300'}>Contact us</NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <hr className='border-gray-700 mt-5' />
                    <p className='text-center py-5'>© 2025 EBT SHOP — All Rights Reserved | Designed & Developed by <Link to='/' className='font-semibold'>Litan Molla</Link></p>
                </div>
            </footer>
        </>
    )
}

export default Footer