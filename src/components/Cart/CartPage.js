import React, { useContext, useEffect } from 'react';
import "../styling/CartPage.css";
import Alert from 'react-bootstrap/Alert';
import AppContext from '../../context/AppContext';
import CartItem from './CartItem';
import CartPaymentGateway from './CartPaymentGateway';

function CartPage() {
  const {
    cartItems , setCartItems,
    billing , setBilling
  } = useContext(AppContext)
  // console.log(cartItems);

 

  
  useEffect(()=>{
    let totalSum = 0;
    cartItems.map(item=>{
      totalSum = totalSum + parseInt(item.price - item.price*item.discount/100)*item.qty;
    })
    setBilling({
      ...billing , 
      items : cartItems ,
      'total_bill':totalSum
    })
  },[cartItems])

  return (
      cartItems.length ? 
      (<div className='cartpage-container'>
      <div className='cart-item-container'>
      <Alert variant='light'>
          Order-Summary - checkout
        </Alert>
      {
      cartItems && cartItems.map((item , index)=>(
        <CartItem item={item} key={index}/>
      ))
    }
    </div>
      {
        cartItems.length? <CartPaymentGateway/>:''
      }
    </div>):
   ( <div className='empty-cart-massage'>
      oops! your cart is empty!!
    </div>)
    
    
    
  )
}

export default CartPage