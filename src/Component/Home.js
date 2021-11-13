import React from "react";
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
export default function Home(props) {
  document.title = "Home"

  return (
    <main id="main">
      <div className="container">
        {/* MAIN SLIDE */}

        <div className="wrap-main-slide">
          <Carousel>
            <Carousel.Item className="item-slide">
              <img
                className="d-block w-100"
                src="assets/images/main-slider-1-1.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <div className="slide-info slide-1">
                  <h2 className="f-title">
                    Kid Smart <b>Watches</b>
                  </h2>
                  <span className="subtitle">
                    Compra todos tus productos Smart por internet.
                  </span>
                  <p className="sale-info">
                    Only price: <span className="price">$59.99</span>
                  </p>
                  <Link to="#" className="btn-link">
                    Shop Now
                  </Link>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="item-slide">
              <img
                className="d-block w-100"
                src="assets/images/main-slider-1-2.jpg"
                alt="Second slide"
              />

              <Carousel.Caption>
                <div className="slide-info slide-2">
                  <h2 className="f-title">Extra 25% Off</h2>
                  <span className="f-subtitle">On online payments</span>
                  <p className="discount-code">Use Code: #FA6868</p>
                  <h4 className="s-title">Get Free</h4>
                  <p className="s-subtitle">TRansparent Bra Straps</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="item-slide">
              <img
                className="d-block w-100"
                src="assets/images/main-slider-1-3.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <div className="slide-info slide-3">
                  <h2 className="f-title">
                    Great Range of <b>Exclusive Furniture Packages</b>
                  </h2>
                  <span className="f-subtitle">
                    Exclusive Furniture Packages to Suit every need.
                  </span>
                  <p className="sale-info">
                    Stating at: <b className="price">$225.00</b>
                  </p>
                  <Link to="#" className="btn-link">
                    Shop Now
                  </Link>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

        </div>

        {/* BANNER */}
        <div className="wrap-banner style-twin-default">
          <div className="banner-item">
            <Link to="#" className="link-banner banner-effect-1">
              <figure>
                <img
                  src="assets/images/home-1-banner-1.jpg"
                  alt=""
                  width="580"
                  height="190"
                />
              </figure>
            </Link>
          </div>
          <div className="banner-item">
            <Link to="#" className="link-banner banner-effect-1">
              <figure>
                <img
                  src="assets/images/home-1-banner-2.jpg"
                  alt=""
                  width="580"
                  height="190"
                />
              </figure>
            </Link>
          </div>
        </div>

        {/* On Sale */}
        <div className="wrap-show-advance-info-box style-1 has-countdown">
          <h3 className="title-box">On Sale</h3>
          <div
            className="wrap-countdown mercado-countdown"
            data-expire="2023/12/12 12:34:56"
          ></div>


          {/*owl crousel  */}
          <OwlCarousel className='wrap-products style-nav-1 equal-container' {...props.options}>
            {props.items2.map((item) => {
              return (
                <div key={item.sno} className='item'>
                  <div
                    className="product product-style-2 equal-elem " >
                    <div className="product-thumnail">
                      <Link to="#" title={item.name}>
                        <figure>
                          <img
                            src={item.img}
                            width="800"
                            height="800"
                            alt={item.name}
                          />
                        </figure>
                      </Link>
                      <div className="wrap-btn">
                        <Link to="/ItemDetail" className="function-link" onClick={() => props.selectitem(item)}>
                          quick view
                        </Link>
                      </div>
                    </div>
                    <div className="product-info">
                      <Link to="#" className="product-name">
                        <span>{item.name}</span>
                      </Link>
                      <div className="wrap-price">
                        <span className="product-price">${item.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </OwlCarousel>

          {/*  */}

        </div>

        {/* Latest Products */}
        <div className="wrap-show-advance-info-box style-1">
          <h3 className="title-box">Latest Products</h3>
          <div className="wrap-top-banner">
            <Link to="#" className="link-banner banner-effect-2">
              <figure>
                <img
                  src="assets/images/digital-electronic-banner.jpg"
                  width="1170"
                  height="240"
                  alt=""
                />
              </figure>
            </Link>
          </div>
          <div className="wrap-products">
            <div className="wrap-product-tab tab-style-1">
              <div className="tab-contents">
                <div className="tab-content-item active" id="digital_1a">
                  <OwlCarousel className="wrap-products style-nav-1 equal-container" {...props.options}>
                    {props.items2.map((item) => {
                      return (
                        <div key={item.sno} className="item">
                          <div
                            className="product product-style-2 equal-elem " >
                            <div className="product-thumnail">
                              <Link to="#" title={item.name}>
                                <figure>
                                  <img
                                    src={item.img}
                                    width="800"
                                    height="800"
                                    alt={item.name}
                                  />
                                </figure>
                              </Link>
                              <div className="group-flash">
                                {item.new === true && (
                                  <span className="flash-item new-label">
                                    new
                                  </span>
                                )}
                                {item.sale === true && (
                                  <span className="flash-item sale-label">
                                    sale
                                  </span>
                                )}
                                {item.Bestseller === true && (
                                  <span className="flash-item bestseller-label">
                                    Bestseller
                                  </span>
                                )}
                              </div>
                              <div className="wrap-btn">
                                <Link to="/ItemDetail" className="function-link" onClick={() => props.selectitem(item)}>
                                  quick view
                                </Link>
                              </div>
                            </div>
                            <div className="product-info">
                              <Link to="#" className="product-name">
                                <span>{item.name}</span>
                              </Link>
                              <div className="wrap-price">
                                <span className="product-price">
                                  ${item.price}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Categories */}
        <div className="wrap-show-advance-info-box style-1">
          <h3 className="title-box">Product Categories</h3>
          <div className="wrap-top-banner">
            <Link to="#" className="link-banner banner-effect-2">
              <figure>
                <img
                  src="assets/images/fashion-accesories-banner.jpg"
                  width="1170"
                  height="240"
                  alt=""
                />
              </figure>
            </Link>
          </div>
          <div className="wrap-products">
            <div className="wrap-product-tab tab-style-1">
              <div className="tab-control">
                <Link to="#fashion_1a" className="tab-control-item active">
                  Smartphone
                </Link>
                <Link to="#fashion_1b" className="tab-control-item">
                  Watch
                </Link>
                <Link to="#fashion_1c" className="tab-control-item">
                  Laptop
                </Link>
                <Link to="#fashion_1d" className="tab-control-item">
                  Tablet
                </Link>
              </div>
              <div className="tab-contents">
                <div className="tab-content-item active" id="fashion_1a">
                  <OwlCarousel
                    className="wrap-products style-nav-1 equal-container" {...props.options} >
                    {props.items2.map((item) => {
                      return (
                        <div key={item.sno} className="item">
                          <div
                            className="product product-style-2 equal-elem " >
                            <div className="product-thumnail">
                              <Link to="#" title={item.name}>
                                <figure>
                                  <img
                                    src={item.img}
                                    width="800"
                                    height="800"
                                    alt={item.name}
                                  />
                                </figure>
                              </Link>
                              <div className="group-flash">
                                {item.new === true && (
                                  <span className="flash-item new-label">
                                    new
                                  </span>
                                )}
                                {item.sale === true && (
                                  <span className="flash-item sale-label">
                                    sale
                                  </span>
                                )}
                                {item.Bestseller === true && (
                                  <span className="flash-item bestseller-label">
                                    Bestseller
                                  </span>
                                )}
                              </div>
                              <div className="wrap-btn">
                                <Link to="/ItemDetail" className="function-link" onClick={() => props.selectitem(item)}>
                                  quick view
                                </Link>
                              </div>
                            </div>
                            <div className="product-info">
                              <Link to="#" className="product-name">
                                <span>{item.name}</span>
                              </Link>
                              <div className="wrap-price">
                                <span className="product-price">
                                  ${item.price}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </OwlCarousel>
                </div>

                <div className="tab-content-item" id="fashion_1b">
                  <OwlCarousel
                    className="wrap-products equal-container " {...props.options}>
                    {props.items2.map((item) => {
                      return (
                        <div key={item.sno} className="item">
                          <div
                            className="product product-style-2 equal-elem ">
                            <div className="product-thumnail">
                              <Link to="#" title={item.name}>
                                <figure>
                                  <img
                                    src={item.img}
                                    width="800"
                                    height="800"
                                    alt={item.name}
                                  />
                                </figure>
                              </Link>
                              <div className="group-flash">
                                {item.new === true && (
                                  <span className="flash-item new-label">
                                    new
                                  </span>
                                )}
                                {item.sale === true && (
                                  <span className="flash-item sale-label">
                                    sale
                                  </span>
                                )}
                                {item.Bestseller === true && (
                                  <span className="flash-item bestseller-label">
                                    Bestseller
                                  </span>
                                )}
                              </div>
                              <div className="wrap-btn">
                                <Link to="/itemDetail" className="function-link" onClick={() => props.selectitem(item)}>
                                  quick view
                                </Link>
                              </div>
                            </div>
                            <div className="product-info">
                              <Link to="#" className="product-name">
                                <span>{item.name}</span>
                              </Link>
                              <div className="wrap-price">
                                <span className="product-price">
                                  ${item.price}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </OwlCarousel>
                </div>

                <div className="tab-content-item" id="fashion_1c">
                  <OwlCarousel
                    className="wrap-products style-nav-1 equal-container" {...props.options}
                  >
                    {props.items2.map((item) => {
                      return (
                        <div key={item.sno} className="item">
                          <div
                            className="product product-style-2 equal-elem " >
                            <div className="product-thumnail">
                              <Link to="#" title={item.name}>
                                <figure>
                                  <img
                                    src={item.img}
                                    width="800"
                                    height="800"
                                    alt={item.name}
                                  />
                                </figure>
                              </Link>
                              <div className="group-flash">
                                {item.new === true && (
                                  <span className="flash-item new-label">
                                    new
                                  </span>
                                )}
                                {item.sale === true && (
                                  <span className="flash-item sale-label">
                                    sale
                                  </span>
                                )}
                                {item.Bestseller === true && (
                                  <span className="flash-item bestseller-label">
                                    Bestseller
                                  </span>
                                )}
                              </div>
                              <div className="wrap-btn">
                                <Link to="#" className="function-link">
                                  quick view
                                </Link>
                              </div>
                            </div>
                            <div className="product-info">
                              <Link to="#" className="product-name">
                                <span>{item.name}</span>
                              </Link>
                              <div className="wrap-price">
                                <span className="product-price">
                                  ${item.price}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </OwlCarousel>
                </div>

                <div className="tab-content-item" id="fashion_1d">
                  <OwlCarousel
                    className="wrap-products style-nav-1 equal-container" {...props.options}>
                    {props.items2.map((item) => {
                      return (
                        <div key={item.sno} className="item">
                          <div
                            className="product product-style-2 equal-elem ">
                            <div className="product-thumnail">
                              <Link to="#" title={item.name}>
                                <figure>
                                  <img
                                    src={item.img}
                                    width="800"
                                    height="800"
                                    alt={item.name}
                                  />
                                </figure>
                              </Link>
                              <div className="wrap-btn">
                                <Link to="#" className="function-link">
                                  quick view
                                </Link>
                              </div>
                            </div>
                            <div className="product-info">
                              <Link to="#" className="product-name">
                                <span>{item.name}</span>
                              </Link>
                              <div className="product-rating">
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                              </div>
                              <div className="wrap-price">
                                <span className="product-price">
                                  ${item.price}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

