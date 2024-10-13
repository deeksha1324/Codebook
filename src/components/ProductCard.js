import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import { useCart } from '../context/CartContext';


export default function ProductCard({product}) {
    const {id, name,poster, overview, price,rating, best_seller} = product;
    const {cartList, addToCart, removeFromCart} = useCart()
    const [inCart, setInCart] = useState(false)

    useEffect(()=>{
        const productInCart = cartList.find(item =>item.id === product.id)

        if(productInCart){
            setInCart(true)
        }
        else{
            setInCart(false)
        }
    },[cartList, product.id])

     function handleClick(product){
        addToCart(product)
    }



  return (
      
    <div className="m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <Link to={`/products/${id}`} className="relative" >
           { best_seller && <span className="absolute top-4 left-2 px-2 bg-orange-500 bg-opacity-90 text-white rounded">Best Seller</span>} 
            <img className="rounded-t-lg w-full h-64" src={poster} alt={name} />
        </Link>
        <div className="p-5">
            <Link to={`/products/${id}`}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{overview}</p>

            <div className="flex items-center my-2">
                <Rating rating={rating} />
            </div>

            <p className="flex justify-between items-center">
                <span className="text-2xl dark:text-gray-200">
                    <span>$</span><span>{price}</span>
                </span>
            </p>
            
            <div className="flex items-center justify-between my-2">  
                
                {!inCart && 
                    <button onClick={()=>handleClick(product)} className={`bg-blue-600 text-slate-100 p-1 rounded-md ${product.in_stock ? "" : "cursor-not-allowed"}`}  disabled = {product.in_stock ? "" : "disabled"} >
                        <i className="ml-1 bi bi-plus-lg">Add to cart</i>
                    </button>
                }    
                {inCart && 
                    <button onClick={() =>removeFromCart(product)} className='bg-red-500 text-slate-100 p-1 rounded-md'>
                        <i className="ml-1 bi bi-trash3">Remove item</i>
                    </button>
                }   
            </div>
            
        </div>
    </div>
    
    

  )
}
