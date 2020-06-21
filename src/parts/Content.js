import React, { Component } from "react";
import BrandIcon from "parts/IconText";
import Carousel from "react-bootstrap/Carousel";

import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Lightbox from "react-image-lightbox";
import 'react-image-lightbox/style.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openImage: false,
      imageDetail: '',
      dataImage: [],
      indexImage: 0
    }
  }

  handleOnDragStart = (e) => e.preventDefault()

  handleImageDetail(item, type, index) {
    if (type == 'women') {
      this.setState({dataImage: this.props.state.womenProducts, indexImage: index}, () => {
      })
    } else if (type == 'men') {
      this.setState({dataImage: this.props.state.menProduct, indexImage: index})
    } else {
      this.setState({dataImage: this.props.state.accProducts, indexImage: index})
    }
    this.setState({openImage: true})
  }

  render() {
    return (
      <section className="p-5">
        <div className="d-flex justify-content-between">
          <span>English - Bahasa</span>
          <BrandIcon></BrandIcon>
          <BrandIcon></BrandIcon>
        </div>
        <div className="pt-4">
          <Carousel >
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

        {/* Women */}
        <div className="py-5">
          <div className="d-flex justify-content-between pb-2">
            <label style={{fontWeight:'bold'}}>POPULAR IN WOMEN</label>
            <text>Buat tempat dot</text>
          </div>
          <MultiCarousel 
              swipeable={false}
              draggable={false}
              showDots={true}
              responsive={responsive}
              // ssr={true} // means to render carousel on server-side.
              // infinite={true}
              // autoPlay={true}
              // autoPlaySpeed={1000}
              // keyBoardControl={true}
              // centerMode={true}
              // customTransition="all .5"
              // transitionDuration={500}
              // containerClass="carousel-container"
              // removeArrowOnDeviceType={["tablet", "mobile"]}
              // // deviceType={this.props.deviceType}
              // dotListClass="custom-dot-list-style"
              // itemClass="carousel-item-padding-40-px"
            >
            {this.props.state.womenProducts.map((item,index) => {
              return (
                <div class="form-group mx-3" onClick={() => this.handleImageDetail(item, 'women', index)}>
                  <div>
                    <img
                      className="d-block w-100"
                      src={item.image_file}
                      alt={item.name}
                    />
                  </div>
                  <div style={{display: 'flex', flexDirection:'column'}}>
                    <label style={{color: '#adadad', fontSize: 14, fontWeight: 'bold'}}>WOMEN</label>
                    <label>{item.name}</label>
                    <label>Rp. 250.000</label>
                  </div>
                </div>
              )
            })}
          </MultiCarousel>
        </div>

        {/* Men */}
        <div className="py-5">
          <div className="d-flex justify-content-between pb-2">
            <label style={{fontWeight:'bold'}}>POPULAR IN MEN</label>
            <text>Buat tempat dot</text>
          </div>
          <MultiCarousel 
              swipeable={false}
              draggable={false}
              showDots={true}
              responsive={responsive}
              // ssr={true} // means to render carousel on server-side.
              // infinite={true}
              // autoPlay={true}
              // autoPlaySpeed={1000}
              // keyBoardControl={true}
              // centerMode={true}
              // customTransition="all .5"
              // transitionDuration={500}
              // containerClass="carousel-container"
              // removeArrowOnDeviceType={["tablet", "mobile"]}
              // // deviceType={this.props.deviceType}
              // dotListClass="custom-dot-list-style"
              // itemClass="carousel-item-padding-40-px"
            >
            {this.props.state.menProduct.map((item,index) => {
              return (
                <div class="form-group mx-3" onClick={() => this.handleImageDetail(item, 'men', index)}>
                  <div>
                    <img
                      className="d-block w-100"
                      src={item.image_file}
                      alt={item.name}
                    />
                  </div>
                  <div style={{display: 'flex', flexDirection:'column'}}>
                    <label style={{color: '#adadad', fontSize: 14, fontWeight: 'bold'}}>MEN</label>
                    <label>{item.name}</label>
                    <label>Rp. 250.000</label>
                  </div>
                </div>
              )
            })}
          </MultiCarousel>
        </div>

        {/* Acc */}
        <div className="py-5">
          <div className="d-flex justify-content-between pb-2">
            <label style={{fontWeight:'bold'}}>POPULAR IN ACCESSORIES</label>
            <text>Buat tempat dot</text>
          </div>
          <MultiCarousel 
              swipeable={false}
              draggable={false}
              showDots={true}
              responsive={responsive}
              // in
              // ssr={true} // means to render carousel on server-side.
              // infinite={true}
              // autoPlay={true}
              // autoPlaySpeed={1000}
              // keyBoardControl={true}
              // centerMode={true}
              // customTransition="all .5"
              // transitionDuration={500}
              // containerClass="carousel-container"
              // removeArrowOnDeviceType={["tablet", "mobile"]}
              // // deviceType={this.props.deviceType}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
              // renderDotsOutside={true}
              // afterChange={(previousSlide, { currentSlide, onMove }) => {
              //   alert(currentSlide)
              // }}
            >
            {this.props.state.accProducts.map((item,index) => {
              return (
                <div class="form-group mx-3" onClick={() => this.handleImageDetail(item, 'acc', index)}>
                  <div>
                    <img
                      className="d-block w-100"
                      src={item.image_file}
                      alt={item.name}
                    />
                  </div>
                  <div style={{display: 'flex', flexDirection:'column'}}>
                    <label style={{color: '#adadad', fontSize: 14, fontWeight: 'bold'}}>ACCESSORIES</label>
                    <label>{item.name}</label>
                    <label>Rp. 250.000</label>
                  </div>
                </div>
              )
            })}
          </MultiCarousel>
        </div>

        {this.state.openImage && (
          <Lightbox
            mainSrc={this.state.dataImage[this.state.indexImage].image_file}
            nextSrc={this.state.dataImage[this.state.indexImage + 1]}
            prevSrc={this.state.dataImage[this.state.indexImage - 1]}
            onCloseRequest={() => this.setState({ openImage: false })}
            onMovePrevRequest={() =>
              this.setState({
                indexImage: this.state.indexImage - 1,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                indexImage: this.state.indexImage + 1
              })
            }
          />
        )}
      </section>
    );
  }
}