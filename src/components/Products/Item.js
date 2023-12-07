import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../styling/Products.css";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';

function Item({product}) {
  // console.log(product);
  const {setCartItems} = useContext(AppContext)
  const handleAddToCart = () => {
    setCartItems(prev => [
      ...prev , product
    ])
  }
  return (
    
    <Card className='card-container' style={{ width: '18rem' }}>
      <Link to={`/products/${product.id}`} key={product.id}>
      <Card.Img variant="top" src={product.image1.url} />
      </Link>
      <Card.Body>
        <Card.Text>{product.productName}</Card.Text>
        <div className='flex'>
        <Button variant="primary" onClick={handleAddToCart}>Add to Cart</Button>
        <Button disabled variant="secondary">Price - {product.price} Rs</Button>
        </div>
      </Card.Body>
    </Card>
   
  );
}

export default Item;