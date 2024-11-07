import React from 'react';
import EmptyCart from './components/EmptyCart';
import CartList from './components/CartList';
import { useCart } from '../../context/CartContext';
import useTitle from '../../hook/useTitle';

export default function CartPage() {
  const {cartList} = useCart();
  useTitle(`Cart (${cartList.length})`)
  
  return (
    <main>
    {cartList.length ? <CartList /> : <EmptyCart /> }
    </main>
  )
}
