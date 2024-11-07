import React from 'react'
import OrderSuccess from './components/OrderSuccess'
import OrderFail from './components/OrderFail'
import { useLocation } from 'react-router-dom';
import useTitle from '../../hook/useTitle';

export default function OrderPage() {
    const { state } = useLocation();
    useTitle("Order details")
    
  return (
    <main>
        {state.status? <OrderSuccess data={state.data}/> : <OrderFail/>}
    </main>
  )
}
