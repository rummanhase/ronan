import React, { useContext, useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import "../styling/ItemDescription.css"

function ItemDesciptionPage() {
  const { productId } = useParams();
  const { productList , cartItems ,setCartItems } = useContext(AppContext);
  const [product, setProduct] = useState();
  const [isPresentInCart , setIsPresentInCart] = useState(false)
  
  const [showA, setShowA] = useState(false);
  const [zIndex , setZIndex] = useState(-1)
  const toggleShowA = async () => {
    const newShowA = !showA;
    setShowA(newShowA);
    setZIndex(1)
    await new Promise(resolve => setTimeout(resolve, 1000));
    setShowA(!newShowA);
    setZIndex(-1)
  };
  

  const handleAddToCart = () => {
    console.log('handleAddToCart called');
    setCartItems(prev => [
      ...prev, product
    ]);
    toggleShowA();
    setIsPresentInCart(true)
  }
  
  useEffect(() => {
    const foundProduct = productList.find(item => item.id === productId);
    setProduct(foundProduct);
    // console.log(foundProduct);
    const isPresent = cartItems.find(item => item.id === productId);
    if(isPresent){
      setIsPresentInCart(true)
    }
    console.log(isPresent);
  }, [productId, productList , isPresentInCart]);

  return (
    <>
      {product && (
        <Card className='desc-card-name' >
          <div className='desc-card-images'>
            {product.image1 && product.image1.url && (
               <div className="desc-img-container">
              <Card.Img className='desc-image' variant="top" src={product.image1.url} alt={product.title} />
              </div>
          )}
            {product.image2 && product.image2.url && (
               <div className="desc-img-container">
              <Card.Img className='desc-image' variant="top" src={product.image2.url} alt={product.title} />
              </div>
          )}
            {product.image3 && product.image3.url && (
               <div className="desc-img-container">
              <Card.Img className='desc-image' variant="top" src={product.image3.url} alt={product.title} />
              </div>
          )}
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
            {
                !isPresentInCart?
                <Button variant="secondary" className='addtocartBtn' onClick={handleAddToCart}>Add to Cart</Button>
                :
                <>
                <Button variant="disabled" disabled className='addtocartBtn' onClick={handleAddToCart}>Added to Cart</Button>
                <Link to="/cart">
                <Button variant="secondary" className='addtocartBtn'>Check Cart</Button></Link>
                </>
              }
            </div>
          </Card.Body>
          </div>
          <Row className='my-toast' style={{ zIndex }}>
        <Col md={6} className="mb-2">
          <Toast show={showA} onClose={toggleShowA}>
            <h3>
            <Toast.Header>
              <strong className="me-auto">Item Added to Cart</strong>
            </Toast.Header>
            </h3>
            <h4><Toast.Body>{product.productDiscription}</Toast.Body></h4>
            <Toast.Body>
              <strong className="me-auto">Congratulations</strong>
            </Toast.Body>
            
            <h5><Toast.Body>Happy Shopping</Toast.Body></h5>
          </Toast>
        </Col>
          </Row>
        </Card>
       
          
      )}
    </>
  );
}

export default ItemDesciptionPage;
