import React, { Component } from "react";
import BrandIcon from "parts/IconText";
import Carousel from "react-bootstrap/Carousel";

export default class Content extends Component {
componentDidMount() {
  alert(JSON.stringify(this.props.state.banner))
}

  render() {
    return (
      <section className="container pt-4">
        <div className="d-flex justify-content-center">
          <BrandIcon></BrandIcon>
        </div>
        <div className="pt-4">
          <Carousel>
            {this.props.state.banner.map((item, index) => {
              return (
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={item.image_file}
                    alt={item.title}
                  />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </section>
    );
  }
}
