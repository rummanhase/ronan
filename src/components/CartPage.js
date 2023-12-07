import React, { useContext } from 'react';
import "./styling/CartPage.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import AppContext from '../context/AppContext';

function CartPage() {
  const {
    cartItems , setCartItems
  } = useContext(AppContext)
  console.log(cartItems);
  return (
    <div className='cartpage-container'>
      <div className='cart-item-container'>
      <Alert variant='light'>
          Order-Summary - checkout
        </Alert>
      {
      cartItems && cartItems.map((item)=>(
        <Card className='cart-item' border="secondary" key={item.id} style={{ width: 'auto' }}>
        <div className='img-container'><Card.Img className='my-img' variant="top" src={item.image} alt={item.title} /></div>
        <Card.Header className='card-title-container'>{item.title}</Card.Header>
        <Card.Body className='card-price-container'>
          <Card.Title>Rs. {item.price}</Card.Title>
        </Card.Body>
        <Card.Body className='card-quantity-container'>
          <Card.Title>
          <Button variant="light"><span className='my-card-btn'>-</span></Button>{' '}
            <span> 1 </span>
          <Button variant="light"><span className='my-card-btn'>+</span></Button>{' '}  
          </Card.Title>
        </Card.Body>
      </Card>
      ))
    }
    </div>
       
      <div className='payment-gateway'>
      <Alert variant='light'>
          Payment Gateway
        </Alert>
      <Card style={{ maxWidth:'38rem' }}>
      <Card.Body>
    <Form className='my-address-form'>
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Phone Number" />
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="First Name" />
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Last Name" />
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Street Address Line 1" />
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Street Address Line 2" />
      </Form.Group>
      
      <Form.Group className="mb-2" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Pin Code" />
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="City" />
      </Form.Group>
      
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="District" />
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="State" />
      </Form.Group>
      <Button variant="secondary" type="submit">
        Continue
      </Button>
    </Form>
      </Card.Body>
    </Card>
    <Card style={{ maxWidth:'38rem', marginTop:'0.5rem' }}>
      <Card.Body>
      <Card style={{ maxWidthwidth: '18rem' }}>
      <ListGroup variant="flush">
        <ListGroup.Item className='payment-total-details'>
          <span>Subtotal</span>
          <span>100</span>
        </ListGroup.Item>
        <ListGroup.Item className='payment-total-details'>
          <span>Delivery Charge</span>
          <span>free</span>
          </ListGroup.Item>
        <ListGroup.Item className='payment-total-details'>
          <span>Excess Taxes</span>
          <span>00</span>
          </ListGroup.Item>
          <ListGroup.Item className='payment-total-details'>
          <span>Grand Total</span>
          <span>100</span>
          </ListGroup.Item>
      </ListGroup>
      <Button variant="secondary" type="submit" className="mt-2">
        Way to Payment Gateway
      </Button>
    </Card>
      </Card.Body>
    </Card>
      </div>
    </div>
  )
}

export default CartPage