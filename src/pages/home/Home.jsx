import React from "react";
import "../home/home.css";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
const Home = () => {
  return (
    <div classNameName="parent">
      {/* <h1>home page</h1> */}
      <div
        id="carouselExampleCaptions"
        className="carousel slide cParent"
        data-bs-ride="false"
      >
        <div className="carousel-indicators dotStyle">
          <p
            id="dot"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active "
            aria-current="true"
            aria-label="Slide 1"
          ></p>
          <p
            id="dot"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></p>
          <p
            id="dot"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></p>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2000">
            <img src="/image1.jpg" className="d-block w-100" alt="home-img" />
            <div className="carousel-caption TextStyle">
              <h1>wel come</h1>
              <h3>Single Family Home</h3>
              <h5>
                1328 Las Pulgas Road Pacific Palisades, California, 90272 United
                States
              </h5>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="/image2.jpg" className="d-block w-100" alt="home-img" />
            <div className="carousel-caption  ">
              <h3>Townhome</h3>
              <h5>13809 N Highway 183 Ste 275 Austin, Texas 78750</h5>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="/image3.jpg" className="d-block w-100" alt="home-img" />
            <div className="carousel-caption ">
              <h3>Beach House</h3>
              <h5>1810 Johny's Beach House, Kovalam Beach, India</h5>
            </div>
          </div>
        </div>
        <div className="btn_Parent">
          <FiChevronLeft
            color="#fff"
            id="btn"
            className="mx-5"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </FiChevronLeft>
          <FiChevronRight
            color="#fff"
            id="btn"
            className="mx-5"
            // className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </FiChevronRight>
        </div>
      </div>
    </div>
  );
};

export default Home;
