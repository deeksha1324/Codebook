import React from 'react';
import EmptyCart from './components/EmptyCart';
import CartList from './components/CartList';

export default function CartPage() {
  const cartlistLength = 1;
  return (
    <main>
    {cartlistLength ? <CartList /> : <EmptyCart /> }
    </main>
  )
}
