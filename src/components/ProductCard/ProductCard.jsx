import React from 'react'
import { Link } from 'react-router'

const ProductCard = ({ product }) => {
    const { id, image, price, title, discount_price } = product || {}
    return (
        <div className='text-center space-y-2 bg-slate-900 border border-gray-800 hover:shadow-lg hover:shadow-gray-600 duration-300'>
            <img className='w-full' src={image} alt={title} />
            <h4 className='text-2xl font-semibold'>{title}</h4>
            <p>৳{discount_price} <del className='text-orange-400/50'>৳{price}</del> </p>
            <Link to={`/product-details/${id}`} className='bg-orange-400 w-full block text-gray-900 font-medium py-2 duration-300 hover:bg-cyan-400'>View Details</Link>
        </div>
    )
}

export default ProductCard