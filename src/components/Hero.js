import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../images/hotel-photo1.jpg";
import img2 from "../images/hotel-photo2.jpg";
import img3 from "../images/hotel-photo3.jpg";
import img4 from "../images/hotel-photo4.jpg";
import HeroBanner from "./HeroBanner";

export default function Hero() {
  return (
    <div className="hero-container">
      <Carousel
        className="carousel"
        controls={false}
        fade={true}
        indicators={false}
      >
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img4} alt="" />
        </Carousel.Item>
      </Carousel>
      <HeroBanner />
    </div>
  );
}
