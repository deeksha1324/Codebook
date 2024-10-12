import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {HomePage, ProductsList, ProductDetails, Login, Register, CartPage} from '../pages'


export default function 
r() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/products' element={<ProductsList />}></Route>
            <Route path='/products/:id' element={<ProductDetails />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={< Register />} ></Route>
            <Route path='/cart' element={< CartPage />} > </Route>

        </Routes>
    </div>
  )
}
