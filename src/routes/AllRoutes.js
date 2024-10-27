import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {HomePage, ProductsList, ProductDetails, CartPage, PageNotFound} from '../pages'
import EmptyCart from '../pages/Cart/components/EmptyCart';
import OrderPage from '../pages/Order/OrderPage';



export default function AllRoutes(){
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/products' element={<ProductsList />}></Route>
            <Route path='/products/:id' element={<ProductDetails />}></Route>
            <Route path='/cart' element={< CartPage /> } > </Route>
            <Route path='/emptycart' element={<EmptyCart></EmptyCart>}></Route>
            <Route path='/order-summary' element={<OrderPage/>}></Route>
            <Route path='*' element={<PageNotFound/>}></Route>
        </Routes>
    </div>
  )
}
