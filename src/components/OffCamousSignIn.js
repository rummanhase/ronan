import { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import "./styling/SignIn.css";
import AppContext from '../context/AppContext';

function OffcanvasSignIn({ name, ...props }) {
  
  const {
    user , setUser,
    login , setLogin
  } = useContext(AppContext)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLoginSuccess = (response) => {
    // console.log('Login success:', JSON.stringify(response, null, 2));
    // const token = ;
    const decoded = jwtDecode(response.credential);
    // console.log(decoded);
    setUser(decoded.name)
    setLogin(true)
    handleClose()
  }
  

  const handleLoginFailure = (msg) => {
    console.log(msg);
  }
  useEffect(()=>{
    // console.log(user);
  } , [user])

  return (
    <>
      <Button variant="secondary" onClick={handleShow} className="me-2">
        {
          login === true ? user?user :<>Sign Out</>: <> Sign In</>
        }
        
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Sign Up</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='signUp-container'>
          {/* <div className="phone_signup_container">
            <div>SignUp with Your Phone Number</div>
            <input type="number" placeholder='XXXXXXXXXX'/>
          </div>
          <div>
            <div>SignUp with your Email Account</div>
            <div>Email Container Body</div>
          </div> */}
          <div>
            <GoogleLogin 
              onSuccess={handleLoginSuccess}
                       onFailure={handleLoginFailure}
          />
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
export default OffcanvasSignIn;