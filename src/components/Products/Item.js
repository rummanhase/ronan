import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../styling/Products.css";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';

function Item({product}) {
  console.log(product);
  const {setCartItems} = useContext(AppContext)
  const handleAddToCart = () => {
    setCartItems(prev => [
      ...prev , product
    ])
  }
  return (
    
    <Card className='card-container' style={{minWidth:'12rem' }}>
      <Link to={`/products/${product.id}`} key={product.id}>
        <div className="img-container">
        <Card.Img className='card-img-top' variant="top" src={product.image1.url} />
        </div>
      
      </Link>
      <Card.Body>
        <Card.Text className='card-text-productName'>{product.productName}</Card.Text>
        <div className='card-product-pricing flex'>
          <span className='selling-price'>
            &#x20B9;{parseInt(product.price - (product.price * (product.discount ? product.discount / 100 : 5/100)))}
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
      </Card.Body>
    </Card>
   
  );
}

export default Item;