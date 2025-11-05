import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router'

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({})
    useEffect(() => {
        const data = async () => {
            try {
                const products = await axios.get('https://litanmolla.github.io/demoproductsapi/data/products/index.json')
                const match = products.data.data?.find(item => item.id === Number(id))
                setProduct(match);
            } catch (error) {
                console.log(error);
            }
        }
        data()
    }, []);
    const { updated_at, title, price, image, discount_price, created_at, badge } = product || {}
    const date = new Date(created_at).toLocaleString()
    return (
        <div>
            <div className="my-10">
                <div className="max-w-3xl mx-auto p-5 bg-gray-800 space-y-2 flex justify-between gap-8 items-center flex-col md:flex-row">
                    <div className="md:w-1/2">
                        <img className='w-full' src={image} alt={title} />
                    </div>
                    <div className="md:w-1/2 space-y-3">
                        <h4 className='text-xl font-semibold'>Product: {title}</h4>
                        <p>Price: <del className='text-orange-400/50'>৳{price} </del>৳{discount_price}</p>
                        <p>Created: {date && date}</p>
                        <p className='text-orange-400/50'><b>Description:</b>
                            <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fugit aliquam quae officiis placeat consequatur possimus, enim pariatur rerum. Quam veniam velit ea sequi distinctio, dolorum totam officiis! Ipsum tenetur eaque earum perspiciatis rem dignissimos ducimus eius architecto qui quisquam, non harum commodi ea adipisci laborum dolore cum assumenda temporibus, minima corporis. Vitae corrupti sunt esse cumque et laudantium obcaecati!</p>
                        <button className='text-gray-900 bg-orange-400 w-full py-2 block cursor-pointer duration-300 hover:bg-cyan-400'>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails