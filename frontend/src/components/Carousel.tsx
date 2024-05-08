import Carousel from 'react-bootstrap/Carousel';
import image1 from '../assets/images/carousel/1.jpg';
import image2 from '../assets/images/carousel/2.jpg';
import styled from 'styled-components';

const Img = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

function CarouselHome() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <Img src={ image1 } alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Img src={ image2 } alt="First slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHome;