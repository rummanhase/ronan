import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './styling/MyCarousel.css';

function MyCarousel() {
  const slides = [
    {
      imageUrl: 'https://lh3.googleusercontent.com/oxPeODS2m6rYIVbhcQChRtOWEYeGDwbeeeB1cDU2o_WYAVPU61VIgx-_6BAh5gSL8Sw=h900',
      text: 'First slide',
      caption: {
        title: 'First slide label',
        content: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
      },
    },
    {
      imageUrl: 'https://i0.wp.com/www.universodegatos.com/wp-content/uploads/2017/04/fivfelv7.jpg?resize=582%2C328',
      text: 'Second slide',
      caption: {
        title: 'Second slide label',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
    },
    {
      imageUrl: 'https://i0.wp.com/www.universodegatos.com/wp-content/uploads/2017/04/fivfelv7.jpg?resize=582%2C328',
      text: 'Third slide',
      caption: {
        title: 'Third slide label',
        content: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
      },
    },
  ];

  return (
    <Carousel className='my-carousel'>
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100 my-image" src={slide.imageUrl} alt={slide.text} />
          <Carousel.Caption>
            <h3>{slide.caption.title}</h3>
            <p>{slide.caption.content}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default MyCarousel;
