import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { GoogleLogin } from '@react-oauth/google';
import "./styling/SignIn.css";
const CLIENT_ID = ''

function OffcanvasSignIn({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLoginSuccess = (msg) => {
    console.log(`mymsg ${msg}`);
  }

  const handleLoginFailure = (msg) => {
    console.log(msg);
  }

  return (
    <>
      <Button variant="secondary" onClick={handleShow} className="me-2">
        Sign In
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Sign Up</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='signUp-container'>
          <div className="phone_signup_container">
            <div>SignUp with Your Phone Number</div>
            <input type="number" placeholder='XXXXXXXXXX'/>
          </div>
          <div>
            <div>SignUp with your Email Account</div>
            <div>Email Container Body</div>
          </div>
          <div>
          <GoogleLogin onSuccess={handleLoginSuccess}
      onFailure={handleLoginFailure}/>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
export default OffcanvasSignIn;