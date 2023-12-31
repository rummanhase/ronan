import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import './styling/NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import OffcanvasSignIn from './OffCamousSignIn';
import Badge from 'react-bootstrap/Badge';
import AppContext from '../context/AppContext';

function NavBar() {
  const {cartItems , setCartItems} = useContext(AppContext)
  return (
    <div className='nav-container'>
      <Navbar expand="lg" className="bg-body-tertiary my-x-padding">
      <Container fluid>
      <Link to="/">
        <Navbar.Brand>Ronan Faashion</Navbar.Brand>
      </Link>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            {/* Add your navigation links here */}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search Here"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="my-margin-right">
          
          <Link to="/cart"><FontAwesomeIcon icon={faShoppingCart} /></Link>
          {
            cartItems.length?<Badge bg="secondary" className='badge'>
              {cartItems.length}
            </Badge>:''
          }
          
          </Navbar.Text>
          <Navbar.Text>
            
          <OffcanvasSignIn placement={'end'} name={'end'}/>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavBar;
