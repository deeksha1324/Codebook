import React, { useEffect, useState } from 'react'
import { ProductCard } from '../../../components'

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [errorMsg, setErrorMsg] = useState("")

  useEffect(()=>{
    async function fetchProducts(){
      try{
        const response = await fetch(`${process.env.REACT_APP_HOST}/featured_products`)
        const data= await response.json()
        setProducts(data)
      }catch(error){
        setErrorMsg(error.message)
      }
      
    }
    fetchProducts();
  },[])

  return (
    <section>
        <h1 className='text-2xl text-center font-semibold underline underline-offset-4 dark:text-slate-100 mt-16 mb-5'>Featured Products</h1>
        <div className='flex flex-wrap justify-center lg:flex-row'>
        <p className='dark:text-slate-100'>{errorMsg}</p>
          {products.map((product)=>(
              <ProductCard key={product.id} product={product} />
          ))}
            
        </div>
    </section>
  )
}
