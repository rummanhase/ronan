import React, { useContext, useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import "../styling/ItemDescription.css"

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
    <>
      {product && (
        <Card className='card-desc' style={{ width: '100%' }}>
          <div className='card-img'>
            <div className="img-container">
            {product.image1 && product.image1.url && (
              <Card.Img className='img-container' variant="top" src={product.image1.url} alt={product.title} />
          )}
            </div>
            <div className="img-container">
            {product.image1 && product.image1.url && (
              <Card.Img className='img-container' variant="top" src={product.image2.url} alt={product.title} />
          )}
            </div>
            <div className="img-container">
            {product.image3 && product.image3.url && (
              <Card.Img className='img-container' variant="top" src={product.image3.url} alt={product.title} />
          )}
            </div>
          </div>
          <div className="card-body">
          <Card.Body>
            <Card.Text>{product.subCategory}</Card.Text>
            <Card.Title className='card-title'>{product.productName}</Card.Title>
            <Card.Text className='product-desc-text-liner'>{product.productDiscription}</Card.Text>
            <Card.Text className='product-desc-text-liner'>Preferably for {product.ageGroup}</Card.Text>
            <Card.Text className='product-desc-text-liner'>Category {product.category}</Card.Text>
            <Card.Text className='product-desc-text-liner'>Color {product.color}</Card.Text>
            <Card.Text className='product-desc-text-liner'>fabric material {product.fabricMaterial}</Card.Text>
            <Card.Text className='product-desc-text-liner'>fabric type {product.fabricType}</Card.Text>
            <Card.Text className='product-desc-text-liner'>wear for {product.gender}</Card.Text>
            <Card.Text className='product-desc-text-liner'>Product size {product.size}</Card.Text>
            <Card.Text className='product-desc-text-liner'>Size Description {product.sizeDescription}</Card.Text>
            <Card.Text className='product-desc-text-liner'>Style Fit {product.styleFit}</Card.Text>
            <Card.Text className='product-desc-text-liner'>Neck Type {product.styleNeckline}</Card.Text>
            <Card.Text className='product-desc-text-liner'>Sleeve Type {product.styleSleeveLength}</Card.Text>
            <Card.Text className='product-desc-text-liner'>washing Instruction {product.washingInstruction}</Card.Text>
            <Card.Text className='product-desc-text-liner'>Maintainance Tips {product.maintainanceTips}</Card.Text>
            <div className='card-product-pricing flex'>
          <span className='selling-price'>
            &#x20B9;{parseInt(product.price - (product.price * (product.discount ? product.discount / 100 : 5/100)))}&nbsp;
             only
          </span>
          <span className='marked-price'>
            &#x20B9;{product.price}
          </span>
          <span className='discount-percentage'>
          {
            product.discount ? 
            product.discount :
            5
          }
          % off</span>
        </div>
            <div className='flex'>
              <Button variant="secondary" className='addtocartBtn' onClick={handleAddToCart}>Add to Cart</Button>
            </div>
          </Card.Body>
          </div>
        </Card>
      )}
    </>
  );
}

export default ItemDesciptionPage;
