import Card from 'react-bootstrap/Card';
import "./styling/Footer.css"

function Footer() {
  return (
    <Card className="text-center footer-container" text='dark'>
      <Card.Body className='footer-body'>
        <div>
          <div>Owner</div>
          <div>Ronan Fashion</div>
        </div>
        <div>Designer</div>
      </Card.Body>
    </Card>
  );
}

export default Footer;