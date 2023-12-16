import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GooglePay from './GooglePay';

const PaymentStripe = () => {
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [sessionId, setSessionId] = useState('');
  const [loading2, setLoading2] = useState(false);

    const data ={
        name: 'Waleed',
        amount: 1,
        number: '7498608775',
        MUID: "MUID" + Date.now(),
        transactionId: 'T' + Date.now(),
    }

    const handlePayment = (e)=>{
      console.log("payment satrted");
      e.preventDefault();
      setLoading2(true);
      axios.post('http://localhost:4242/api/payment', {...data}).then(res => {  
      setTimeout(() => {
          setLoading2(false);
          console.log('herr' , res);
      }, 1500);
      })
      .catch(error => {
          setLoading2(false)
          console.error(error);
      });   
  }

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get('success')) {
      setSuccess(true);
      setSessionId(query.get('session_id'));
    }

    if (query.get('canceled')) {
      setSuccess(false);
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, [sessionId]);

  return (
    <section>
      <button className='w-100 ' onClick={handlePayment}>Pay Now phonepe</button>
      <GooglePay/>
      {!success && message === '' && (
        <div className="product">
          <Logo />
          <div className="description">
            <h3>Starter plan</h3>
            <h5>$20.00 / month</h5>
          </div>
          <form action="/create-checkout-session" method="POST">
            {/* Add a hidden field with the lookup_key of your Price */}
            <input type="hidden" name="lookup_key" value="{{PRICE_LOOKUP_KEY}}" />
            <button id="checkout-and-portal-button" type="submit">
              Checkout
            </button>
          </form>
          
        </div>
      )}

      {success && sessionId !== '' && (
        <div className="product Box-root">
          <Logo />
          <div className="description Box-root">
            <h3>Subscription to starter plan successful!</h3>
          </div>
          <form action="/create-portal-session" method="POST">
            <input
              type="hidden"
              id="session-id"
              name="session_id"
              value={sessionId}
            />
            <button id="checkout-and-portal-button" type="submit">
              Manage your billing information
            </button>
          </form>
        </div>
      )}

      {(message !== '' || (!success && message === '')) && (
        <p>{message}</p>
      )}
    </section>
  );
};

const Logo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="14px"
    height="16px"
    viewBox="0 0 14 16"
    version="1.1"
  >
    {/* ... (your Logo SVG content) ... */}
  </svg>
);

export default PaymentStripe;
