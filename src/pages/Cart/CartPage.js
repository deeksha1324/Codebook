import React from 'react';
import EmptyCart from './components/EmptyCart';
import CartList from './components/CartList';
import { useCart } from '../../context/CartContext';

export default function CartPage() {
  const {cartList} = useCart();
  
  return (
    <main>
    {cartList.length ? <CartList /> : <EmptyCart /> }
    </main>
  )
}
