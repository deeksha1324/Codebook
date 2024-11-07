import React, { useEffect, useState } from 'react';
import Rating from '../components/Rating';
import { useParams } from 'react-router-dom';
import useTitle from '../hook/useTitle';
import { useCart } from '../context/CartContext';

export default function ProductDetails() {
  const {cartList,addToCart, removeFromCart} = useCart();
  const [inCart, setInCart] = useState(false);
    const [product, setProduct] = useState({});
    const [errorMsg, setErrorMsg] = useState()
    const { id } =useParams()
    useTitle(product.name)

    useEffect(()=>{
      const productInCart = cartList.find(item => item.id === product.id)

      if(productInCart){
        setInCart(true)
      }
      else{
        setInCart(false)
      }
    },[cartList, product.id])
    

    useEffect(()=>{
        async function fetchProducts() {
          try{
            const response = await fetch(`${process.env.REACT_APP_HOST}/products/${id}`)
            // console.log(response)
            if(!response.ok){
              // eslint-disable-next-line
              throw{ message: response.statusText, status: response.status }
            }
            const data = await response.json();
            setProduct(data);
            setErrorMsg("")
          }
          catch(error){
            setErrorMsg(error.message)
          }
        }
      fetchProducts();
    }, [id])
  


  return (
    <main>
                <p className='dark:text-slate-100'>{errorMsg}</p>
        <section>
                <h1 className="mt-10 mb-5 text-4xl text-center font-bold text-gray-900 dark:text-slate-200">{product.name}</h1>
                <p className="mb-5 text-lg text-center text-gray-900 dark:text-slate-200">{product.overview}</p>
                
          <div className="flex flex-wrap justify-around">
            <div className="max-w-xl my-3">
              <img className="rounded" src={product.poster} alt="" />
            </div>
            <div className="max-w-xl my-3">
              <p className="text-3xl font-bold text-gray-900 dark:text-slate-200">
                <span className="mr-1">$</span>
                <span className="">{product.price}</span>
              </p>
              <div className="my-3"> 
                <span>
                  <Rating rating={product.rating}/>
                </span>
              </div>
              <p className="my-4 select-none">
                {product.best_seller && <span className="font-semibold text-amber-500 border bg-amber-50 rounded-lg px-3 py-1 mr-2">BEST SELLER</span> }  
                {product.in_stock ? (<span className="font-semibold text-emerald-600	border bg-slate-100 rounded-lg px-3 py-1 mr-2">INSTOCK</span>) 
                : (<span className="font-semibold text-rose-700 border bg-slate-100 rounded-lg px-3 py-1 mr-2">OUT OF STOCK</span> )}  
                
                <span className="font-semibold text-blue-500 border bg-slate-100 rounded-lg px-3 py-1 mr-2">{product.size} MB</span>
              </p>
              <p className="my-3">

                {!inCart && 
                  <button onClick={() => addToCart(product)} className={`bg-blue-600 text-slate-100 p-1 rounded-md ${product.in_stock ? "" : "cursor-not-allowed"}`} disabled={product.in_stock ? "" : "disabled"}>
                      <i className="ml-1 bi bi-plus-lg">Add to cart</i>
                  </button>
                }
                {inCart && 
                  <button onClick={()=> removeFromCart(product)} className='bg-red-500 text-slate-100 p-1 rounded-md'>
                  <i className="ml-1 bi bi-trash3">Remove item</i>
                  </button>  
                }
              </p>
              <p className="text-lg text-gray-900 dark:text-slate-200">
                {product.long_description}
              </p>
            </div>
          </div>
        </section>
      </main> 
  )
}
