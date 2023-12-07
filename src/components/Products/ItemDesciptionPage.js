import React, { useContext, useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import "../styling/Products.css"

function ItemDesciptionPage() {
  const { productId } = useParams();
  const { productList } = useContext(AppContext);
  const [product, setProduct] = useState();

  const {setCartItems} = useContext(AppContext)
  const handleAddToCart = () => {
    setCartItems(prev => [
      ...prev , product
    ])
  }

  useEffect(() => {
    const foundProduct = productList.find(item => item.id === productId);
    setProduct(foundProduct);
    // console.log(foundProduct);
  }, [productId, productList]);

  return (
    <div>
      {product && (
        <Card className='card-desc' style={{ width: 'auto' }}>
          <div className='flex-img'>
          {product.image1 && product.image1.url && (
              <Card.Img className='img-container' variant="top" src={product.image1.url} alt={product.title} />
          )}
          {product.image2 && product.image2.url && (
              <Card.Img className='img-container' variant="top" src={product.image2.url} alt={product.title} />
          )}
          {product.image3 && product.image3.url && (
              <Card.Img className='img-container' variant="top" src={product.image3.url} alt={product.title} />
          )}
          </div>
          <Card.Body>
            <Card.Title>{product.productName}</Card.Title>
            <Card.Text>{product.productDiscription}</Card.Text>
            <div className='flex'>
              <Button variant="primary" onClick={handleAddToCart}>Add to Cart</Button>
              <Button disabled variant="secondary">Price - {product.price} Rs</Button>
            </div>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}

export default ItemDesciptionPage;
