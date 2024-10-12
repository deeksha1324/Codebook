import React from 'react';
import { Link } from 'react-router-dom';


export default function Hero() {
  return (
    <section className='flex flex-col lg:flex-row dark:text-slate-100 items-center border rounded  dark:border-slate-700 shadow-sm'>
        <div className='m-5'>
            <h1 className='text-4xl font-bold'>Welcome to eBook Store</h1>
            <p className='text-xl my-5 p-1 dark:text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Voluptatem debitis expedita ratione accusantium libero nam. 
                Aperiam eum animi illum vero dolorum accusamus soluta, delectus accusantium aliquam quidem! 
                Dolorem, vero quaerat.
            </p>
            <Link to="/products" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Explore Ebooks</Link>
        </div>
        <div className='m-3 lg:max-w-xl'>
    <img className="rounded-lg max-h-full" src="https://plus.unsplash.com/premium_photo-1676998931123-75789162f170?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="CodeBook Hero Section" />
        </div>
    </section>
    

  )
}
