import React from 'react'
import SideBar from './Products/SideBar'
import ProductContainer from './Products/ProductContainer';
import './styling/Products.css'

function MainPage() {
  return (
    <div className='flex'>
      <SideBar/>
      <ProductContainer/>
    </div>
  )
}

export default MainPage