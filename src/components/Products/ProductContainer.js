import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import "../styling/Products.css";
import Item from './Item';
import AppContext from '../../context/AppContext';

function ProductContainer() {
    const {
        productList,
        setProductList,
        filteredProduct ,
         setFilteredProduct
    } = useContext(AppContext);

    

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
