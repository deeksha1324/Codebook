import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom';
import Search from './Search';
import DropdownLoggedIn from './DropdownLoggedIn';
import DropdownLoggedOut from './DropdownLoggedOut';
import { useCart } from '../context/CartContext';


export default function Header() {
    const {cartList} = useCart()
    const [darkmode, setDarkmode] = useState(JSON.parse(localStorage.getItem("darkmode")) ||false)
    const [searchSec, setSearch] = useState(false)
    const [dropdown, setDropdown] = useState(false)
    const token = JSON.parse(sessionStorage.getItem("token"))

    useEffect(() => {
        localStorage.setItem("darkmode", JSON.stringify(darkmode))

        if(darkmode){
            document.documentElement.classList.add("dark");
        }
        else{
            document.documentElement.classList.remove("dark");
        }
    }, [darkmode])

  return (
    <header className='border dark:border-slate-700 shadow-sm'>
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="border-b border-slate-200 dark:border-b-0 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-3">
                <Link to="/" className="flex items-center">
                    <img src={logo} className="h-20" alt="codebook Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Codebook</span>
                </Link>

                <div className="flex items-center space-x-6 rtl:space-x-reverse">
                    <span onClick={() => setSearch(!searchSec)} className='cursor-pointer text-xl text-gray-700 dark:text-white  bi bi-search'></span>
                    
                    <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
                    <span className='cursor-pointer text-xl relative bi bi-bag'>
                    <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">{cartList.length}</span>
                    </span>
                    </Link>

                    <span onClick={() => setDarkmode(!darkmode)} className='cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-circle-half'></span>
                    
                    <span onClick={() => setDropdown(!dropdown)} className='cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-person-circle'></span>
                    {dropdown && (token?<DropdownLoggedIn setDropdown={setDropdown}/> : <DropdownLoggedOut setDropdown={setDropdown} />)}
                </div>
            </div>
        </nav>
        {searchSec && <Search setSearch={setSearch} />}
    
        
    </header>

   
  )
}
