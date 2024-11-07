import { useEffect, useState } from 'react';
import { ProductCard } from '../../components';
import FilterBar from './components/FilterBar';
import { useLocation } from 'react-router-dom';
import useTitle from '../../hook/useTitle';
import { useFilter } from '../../context';
import React from 'react';
// import { toast } from 'react-toastify';


export default function ProductsList() {
  const [errorMsg, setErrorMsg] = useState("")
  const [show, setShow] = useState(false)
  const {products, initialProductList} = useFilter()
  const search= useLocation().search;
  // console.log(search)
  const searchItem = new URLSearchParams(search).get("q");
  useTitle("Explore ebook collection")
  // console.log(searchItem)
  // const {productList} = useFilter()
  // console.log(productList)


  
  // console.log(searchItem)

  useEffect(()=>{
    async function fetchProducts() {
      try{
        const response = await fetch(`${process.env.REACT_APP_HOST}/products?name_like=${searchItem ? searchItem: ""}`);
        const data = await response.json();
        // setProducts(data);
        initialProductList(data)
        console.log(data)

        // console.log(`Fetching products from: http://localhost:7000/products?includes=${searchItem}`);

      }
      catch(error){
        // toast.error(error.message)
        setErrorMsg(error.message)
      }
    }
    fetchProducts();
    // eslint-disable-next-line
  }, [searchItem]); 

  return (
    <main>
      <section className="my-5">
            <div className="my-5 flex justify-evenly">
              <span className="text-2xl font-semibold dark:text-slate-100 mb-5">All eBooks ({products.length})</span>
              <span>
                <button onClick={() => setShow(!show)} id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700" type="button"> 
                  <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
                </button>
              </span>            
            </div>    
            <p className='dark:text-slate-100'>{errorMsg}</p>
            <div className="flex flex-wrap justify-center lg:flex-row">
              
              {products.map((product) => (
                <ProductCard key={product.id} product={product}/>
              ))}
                        
            </div>  
            
        </section>
        {show && <FilterBar setShow={setShow}/>}
      

      </main>

      

  )
}
