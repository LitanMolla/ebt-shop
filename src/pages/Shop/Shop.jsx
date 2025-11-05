
import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import axios from 'axios'
const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('https://litanmolla.github.io/demoproductsapi/data/products/index.json')
            .then(res => setProducts(res.data.data))
    }, [])
    return (
        <>
            <div className="my-10">
                <div className="container">
                    <h2 className='text-3xl text-center pb-5 font-semibold'>All <span className='text-cyan-400'>Products</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:grid-cols-4">
                        {products.map(product => <ProductCard key={product.id} product={product} />)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shop