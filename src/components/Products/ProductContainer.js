import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import "../styling/Products.css";
import Item from './Item';
import AppContext from '../../context/AppContext';
import { useParams } from 'react-router';

function ProductContainer() {
    const { category } = useParams();
    const {
        productList,
        setProductList,
        filteredProduct ,setFilteredProduct,
        mensProduct ,womensProduct,unisex
    } = useContext(AppContext);

    useEffect(()=>{
        if(category === 'mens'){
            setFilteredProduct([...mensProduct])
        }else if(category === 'womens'){
            setFilteredProduct([...womensProduct])
        }else if(category === 'clothes'){
            setFilteredProduct([...unisex])
        }
    },[category])

    

    return (
        <div className='product-container'>
            {
                filteredProduct && filteredProduct.map((product) => (
                    <Item key={product.id} product={product} />
                ))
            }
        </div>
    );
}

export default ProductContainer;
