import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import Item from '../Products/Item';
import '../styling/Landing.css'

function LandingPage() {
    const {
        productList,
        mensProduct , setMensProduct,
        womensProduct , setWoensProduct,
        unisex , setUniSex
    } = useContext(AppContext)

    const handleFilteration = (G) => {
        return productList.filter(product => product.gender.toLowerCase() === G.toLowerCase())
    }
    
    useEffect(() => {
        if(productList)
        setMensProduct(handleFilteration("Men's"))
        setWoensProduct(handleFilteration("Women's"))
        setUniSex(handleFilteration("Unisex"))
      }, [productList]);

      useEffect(() => {
      }, [mensProduct , womensProduct , unisex]);

  return (
    <>
    <div className="my-section">
    <Link to={`/categories/${'mens'}`} key='men'>
        <div className="section-header">Fashion For Men</div>
        </Link>
        <div className="section-body">
        {
            mensProduct && mensProduct.map((product , index)=>(
                <Item key={index} product={product}/>
            ))
        }
        </div>
    </div>
    <div className="my-section">
        <Link to={`/categories/${'womens'}`} key='women'>
        <div className="section-header">Fashion For Women</div>
        </Link>
        <div className="section-body">
        {
            womensProduct && womensProduct.map((product , index)=>(
                <Item key={index} product={product}/>
            ))
        }
        </div>
    </div>
    <div className="my-section">
        <Link to={`/categories/${'clothes'}`} key='cloth'>
        <div className="section-header">Fashionable Clothings</div>
        </Link>
        <div className="section-body">
        {
            unisex && unisex.map((product , index)=>(
                <Item key={index} product={product}/>
            ))
        }
        </div>
    </div>
    </>
  )
}

export default LandingPage