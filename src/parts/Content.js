import React from "react";
import BrandIcon from "parts/IconText";
import Carousel from "react-bootstrap/Carousel"; 

export default function Content() {

  
  return (
    <section className="container pt-4">
      <div className="d-flex justify-content-center">
        <BrandIcon></BrandIcon>
      </div>
      <div className="pt-4">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="http://files.sirclocdn.xyz/frontend-test-37/images/this-month-banner-slider.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="http://files.sirclocdn.xyz/frontend-test-37/images/this-month-banner-slider.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
}
