import React, { useContext, useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import AppContext from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';
const APIkey =`ee1dae723b4448f6bd5f57abc89a158c`;

function CartPaymentGateway() {
  const navigate = useNavigate()
  // const [formData, setFormData] = useState({
  //   email: '',
  //   phoneNumber: '',
  //   firstName: '',
  //   lastName: '',
  //   streetAddress1: '',
  //   streetAddress2: '',
  //   pinCode: '',
  //   city: '',
  //   district: '',
  //   state: '',
  // });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // setFormData({ ...formData, [name]: value });
    setBilling((prev) => ({
      ...prev,
      address: {
        ...prev.address,
        [name]: value
      },
    }));
  };


    const {
        billing , setBilling
    } = useContext(AppContext)
    // console.log(billing)
  
    const handleBilling = (e) => {
      e.preventDefault(); 

  if (
    // formData.streetAddress1 &&
    // formData.streetAddress2 &&
    // formData.firstName &&
    // formData.lastName &&
    // formData.pinCode &&
    // formData.city &&
    // formData.district &&
    // formData.state
    billing.address.streetAddress1 &&
    billing.address.streetAddress2 &&
    billing.address.firstName &&
    billing.address.lastName &&
    billing.address.pinCode &&
    billing.address.city &&
    billing.address.district &&
    billing.address.state
  ) {
    // setBilling((prev)=>
    //   (
    //     {
    //       ...prev , 
    //       address:formData
    //     }
    //   ))
    console.log('Billing:', billing);
    navigate('/payment');
  } else {
    console.log('Please fill in all the required fields.');
  }
   };

    const [location, setLocation] = useState();

    function getLocationInfo(latitude, longitude) {
      const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=${APIkey}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
        //   console.log(data);
        if (data.status.code === 200) {
          setLocation(data.results[0].formatted);
          // setFormData({
          //   ...formData,
          //   addressline2: data.results[0].components.road,
          //   state: data.results[0].components.state,
          //   district: data.results[0].components.city_district,
          //   city: data.results[0].components.city,
          //   pinCode: data.results[0].components.postcode,
          // });
        
          setBilling((prev) => ({
            ...prev,
            address: {
              ...prev.address,
              addressline2: data.results[0].components.road,
              state: data.results[0].components.state,
              district: data.results[0].components.city_district,
              city: data.results[0].components.city,
              pinCode: data.results[0].components.postcode,
            },
          }));
        }
         else {
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
            // console.log(result);
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

    
  return (
    <div className='payment-gateway'>
       
      <Alert variant='light'>
          Payment Gateway
        </Alert>
        <Form className='my-address-form' onSubmit={handleBilling}>
      <Card style={{ maxWidth:'38rem' }}>
      <Card.Body>
      <Form.Group className="mb-1">
        <Form.Control
          type="text"
          placeholder="Street Address Line 1"
          name="streetAddress1"
          value={billing.address.streetAddress1}
          onChange={handleInputChange}
          isInvalid={!billing.address.streetAddress1}
        />
        <Form.Control.Feedback type={billing.address.streetAddress1?'valid':'invalid'}>
            {
              billing.address.streetAddress1?<span>Please provide a valid state.</span>:''
}
          </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-1">
        <Form.Control
          type="text"
          placeholder="Street Address Line 2"
          name="streetAddress2"
          value={billing.address.streetAddress2}
          onChange={handleInputChange}
          isInvalid={!billing.address.streetAddress2}
        />
      </Form.Group>

      <Form.Group className="mb-1">
        <Form.Control
          type="text"
          placeholder="First Name"
          name="firstName"
          value={billing.address.firstName}
          onChange={handleInputChange}
          isInvalid={!billing.address.firstName}
        />
      </Form.Group>

      <Form.Group className="mb-1">
        <Form.Control
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={billing.address.lastName}
          onChange={handleInputChange}
          isInvalid={!billing.address.lastName}
        />
      </Form.Group>

      <Form.Group className="mb-1">
        <Form.Control
          type="number"
          placeholder="Pin Code"
          name="pinCode"
          value={billing.address.pinCode}
          onChange={handleInputChange}
          isInvalid={!billing.address.pinCode}
        />
      </Form.Group>

      <Form.Group className="mb-1">
        <Form.Control
          type="text"
          placeholder="City"
          name="city"
          value={billing.address.city}
          onChange={handleInputChange}
          isInvalid={!billing.address.city}
        />
      </Form.Group>

      <Form.Group className="mb-1">
        <Form.Control
          type="text"
          placeholder="District"
          name="district"
          value={billing.address.district}
          onChange={handleInputChange}
          isInvalid={!billing.address.district}
        />
      </Form.Group>

      <Form.Group className="mb-1">
        <Form.Control
          type="text"
          placeholder="State"
          name="state"
          value={billing.address.state}
          onChange={handleInputChange}
          isInvalid={!billing.address.state}
        />
      </Form.Group>
      </Card.Body>
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
      <Button variant="secondary" type='submit' className="mt-2">
        Way to Payment Gateway
      </Button>
    </Card>
      </Card.Body>
    </Card>
    </Form>

    
      </div>
  )
}

export default CartPaymentGateway