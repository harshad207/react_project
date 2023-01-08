import React from "react";
import { useEffect } from "react";
import { useState } from "react";
// import "../home/home.css";
import Carousel from "react-bootstrap/Carousel";
import Loader from "../../loader/Loader";
const Home = () => {
  const [loading, SetLoading] = useState(false)

  useEffect(() => {
    SetLoading(true)
    setTimeout(() => {
      SetLoading(false)
    }, 2000);
  }, [])
  return (
    <div className="carousel">
      <Loader loading={loading} />
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
