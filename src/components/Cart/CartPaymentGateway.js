import React, { useContext, useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import AppContext from '../../context/AppContext';
const APIkey =`ee1dae723b4448f6bd5f57abc89a158c`;

function CartPaymentGateway() {
    const {
        billing
    } = useContext(AppContext)
    console.log(billing)
    const [customerAddress , setCustomerAddress] = useState({
        "addressline1":'',
        "addressline2":'',
        'PinCode':'',
        'city':'',
        'district':'',
        'state':''
    })
    const [location, setLocation] = useState();

    function getLocationInfo(latitude, longitude) {
      const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=${APIkey}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
        //   console.log(data);
          if (data.status.code === 200) {
            console.log("ADDRESS:", data.results[0].formatted);
            setLocation(data.results[0].formatted);
          } else {
            console.log("Reverse geolocation request failed.");
          }
        })
        .catch((error) => console.error(error));
    }
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
    function success(pos) {
      var crd = pos.coords;
    //   console.log("Your current position is:");
    //   console.log(`Latitude : ${crd.latitude}`);
    //   console.log(`Longitude: ${crd.longitude}`);
    //   console.log(`More or less ${crd.accuracy} meters.`);
  
      getLocationInfo(crd.latitude, crd.longitude);
    }
  
    function errors(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
  
    useEffect(() => {
      if (navigator.geolocation) {
        navigator.permissions
          .query({ name: "geolocation" })
          .then(function (result) {
            console.log(result);
            if (result.state === "granted") {
              //If granted then you can directly call your function here
              navigator.geolocation.getCurrentPosition(success, errors, options);
            } else if (result.state === "prompt") {
              //If prompt then the user will be asked to give permission
              navigator.geolocation.getCurrentPosition(success, errors, options);
            } else if (result.state === "denied") {
              //If denied then you have to show instructions to enable location
            }
          });
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    }, []);

    const handleBilling= ()=>{

    }
  return (
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
      <Card style={{ maxWidth:'38rem', marginTop:'0.5rem' }}>
      <Card.Body>
      <Card style={{ maxWidthwidth: '18rem' }}>
      <ListGroup variant="flush">
        <ListGroup.Item className='payment-total-details'>
          <span>Subtotal</span>
          <span>&#x20B9;{billing.total_bill?billing.total_bill:0}</span>
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
          <span>&#x20B9;{billing.total_bill?billing.total_bill:0}</span>
          </ListGroup.Item>
      </ListGroup>
      <Button variant="secondary" onClick={handleBilling} className="mt-2">
        Way to Payment Gateway
      </Button>
    </Card>
      </Card.Body>
    </Card>
    </Form>
      </Card.Body>
    </Card>
    
      </div>
  )
}

export default CartPaymentGateway