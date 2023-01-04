import React from "react";
import "../home/home.css";
import Carousel from "react-bootstrap/Carousel";
const Home = () => {
  return (
    <div className="carousel">
      <Carousel>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src="/image1.jpg" alt="First slide" />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="d-block w-100" src="/image2.jpg" alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/image3.jpg" alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/image4.jpg" alt="Four slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
