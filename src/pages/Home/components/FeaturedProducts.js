import React, { useEffect, useState } from 'react'
import { ProductCard } from '../../../components'

export default function FeaturedProducts() {
  const [products, setProducts] = useState([])

  useEffect(()=>{
    async function fetchProducts(){
      const response = await fetch("http://localhost:7000/featured_products")
      const data= await response.json()
      setProducts(data)
    }
    fetchProducts();
  },[])

  return (
    <section>
        <h1 className='text-2xl text-center font-semibold underline underline-offset-4 dark:text-slate-100 mt-16 mb-5'>Featured Products</h1>
        <div className='flex flex-wrap justify-center lg:flex-row'>
          {products.map((product)=>(
              <ProductCard key={product.id} product={product} />
          ))}
            
        </div>
    </section>
  )
}
