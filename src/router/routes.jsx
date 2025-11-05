import React from 'react'
import { createBrowserRouter } from 'react-router'
import Home from '../pages/Home/Home'
import Root from '../layout/Root/Root'
import ProductDetails from '../pages/ProductDetails/ProductDetails'
import Shop from '../pages/Shop/Shop'
import NotFound from '../pages/NotFound/NotFound'

const routes = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: <NotFound/>,
        children: [
            { index: true, Component: Home },
            { path:'shop', Component: Shop },
            { path: 'product-details/:id', Component: ProductDetails }
        ]
    }
])


export default routes