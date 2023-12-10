import React, { useContext } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
import AppContext from '../../context/AppContext';
import "../styling/CartPage.css";

function CartItem({item}) {
    
   const {
    cartItems , setCartItems
   } = useContext(AppContext)


    const RemoveItem = (itemID ) => {
        setCartItems(
          cartItems.filter(item=> item.id !== itemID)
        )
    }

    const incQTY = (itemID ) => {
        setCartItems(prevItems => {
            return prevItems.map(preItem=>
                {
                    if(preItem.id === itemID){
                      return {...preItem , qty:item.qty+1}
                    }
                    else return preItem
                }
                )
        }
        )
    }

    const decQTY = (itemID ) => {
        setCartItems(prevItems => {
            return prevItems.map(preItem=>
                {
                    if(preItem.id === itemID && preItem.qty > 1){
                      return {...preItem , qty:item.qty-1}
                    }
                    else return preItem
                }
                )
        }
        )
    }
    

  return (
    <Card className='cart-item' border="secondary" key={item.id} style={{ width: 'auto' }}>
        
        <div className='img-container'><Card.Img className='my-img' variant="top" src={item.image1.url} alt={item.title} /></div>
        <div className='cart-item-desc'>
        <Card.Text className='card-title-container'>{item.productName}</Card.Text>
        <Card.Body className='card-price-container'>
        <div className='card-product-pricing'>
          <span className='selling-price'>
            &#x20B9;{parseInt((item.price - (item.price * (item.discount ? item.discount / 100 : 5/100)))* item.qty)}
          </span>
          <span className='marked-price'>
            &#x20B9;{item.price * item.qty}
          </span>
          <span className='discount-percentage'>
          {
            item.discount ? 
            item.discount :
            5
          }
          % off</span>
        </div>
        </Card.Body>
        <Card.Body className='card-quantity-container'>
          <Card.Title>
          <Button variant="light"
          onClick={()=>decQTY(item.id)}
          ><span className='my-card-btn' 
          >-</span></Button>
            <span> {item.qty} </span>
          <Button variant="light"
          onClick={()=>incQTY(item.id)}
          ><span className='my-card-btn'>+</span></Button>  
          </Card.Title>
        </Card.Body>
        <div>
          Size: S
        </div>
        </div>
        <CloseButton className='deletebtn' onClick={() => RemoveItem(item.id)}/>
      </Card>
  )
}

export default CartItem