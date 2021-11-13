import React from "react";
import { Link } from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


export default function Cart(props) {
  document.title = "cart";
  // logic for show total items price
  let totalPrices = 0;
  let totalprice = () => {
    props.cart.map((cart) => {
      let price = cart.totalPrice;
      totalPrices += price;
      return totalPrices;
    });
  };
  totalprice();
  return (
    <>
      <div>
        {/* <!--main area--> */}
        <main id="main" className="main-site">
          <div className="container">
            <div className="wrap-breadcrumb">
              <ul>
                <li className="item-link">
                  <Link to="/" className="link">
                    home
                  </Link>
                </li>
                <li className="item-link">
                  <span>login</span>
                </li>
              </ul>
            </div>
            <div className=" main-content-area">
              {props.cart.length === 0 && (
                <div id="cart-empty">Cart is empty</div>
              )}
              {props.cart.length > 0 && (
                <>
                  <div className="wrap-iten-in-cart">
                    <h3 className="box-title">Products Name</h3>
                    <ul className="products-cart">
                      {props.cart.map((item, index) => {
                        return (
                          <li key={index} className="pr-cart-item">
                            <div className="product-image">
                              <figure>
                                <img src={item.img} alt={item.img} />
                              </figure>
                            </div>
                            <div className="product-name">
                              <Link
                                className="link-to-product"
                                to="/ItemDetail"
                              >
                                {item.name}
                              </Link>
                            </div>
                            <div className="price-field produtc-price">
                              <p className="price">${item.price}</p>
                            </div>
                            <div className="quantity">
                              <div className="quantity-input">
                                <input
                                  type="text"
                                  name="product-quatity"
                                  value={item.qty}
                                  readOnly
                                />
                                <Link
                                  className="btn btn-increase"
                                  to="#"
                                  onClick={() => props.increment(item)}
                                ></Link>
                                <Link
                                  className="btn btn-reduce"
                                  to="#"
                                  onClick={() => props.reduce(item)}
                                ></Link>
                              </div>
                            </div>
                            <div className="price-field sub-total">
                              <p className="price">${item.totalPrice}</p>
                            </div>
                            <div className="delete">
                              <button
                                className="btn-delete"
                                onClick={() => props.removeCart(item)}
                              >
                                Remove
                              </button>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="summary">
                    <div className="order-summary">
                      <h4 className="title-box">Order Summary</h4>
                      <p className="summary-info">
                        <span className="title">Subtotal</span>
                        <b className="index">${totalPrices}</b>
                      </p>
                      <p className="summary-info">
                        <span className="title">Shipping</span>
                        <b className="index">Free Shipping</b>
                      </p>
                      <p className="summary-info total-info ">
                        <span className="title">Total</span>
                        <b className="index">${totalPrices}</b>
                      </p>
                    </div>
                    <div className="checkout-info">
                      <label className="checkbox-field">
                        <input
                          className="frm-input "
                          name="have-code"
                          id="have-code"
                          // value=""
                          type="checkbox"
                        />
                        <span>I have promo code</span>
                      </label>
                      <Link className="btn btn-checkout" to="checkout.html">
                        Check out
                      </Link>
                      <Link className="link-to-shop" to="/shop">
                        Continue Shopping
                        <i
                          className="fa fa-arrow-circle-right"
                          aria-hidden="true"
                        ></i>
                      </Link>
                    </div>
                    <div className="update-clear">
                      <Link
                        className="btn btn-clear"
                        to="#"
                        onClick={() => props.clearCart()}
                      >
                        Clear Shopping Cart
                      </Link>
                      <Link className="btn btn-update" to="#">
                        Update Shopping Cart
                      </Link>
                    </div>
                  </div>
                </>
              )}

              <div className="wrap-show-advance-info-box style-1 box-in-site">
                <h3 className="title-box">Most Viewed Products</h3>
                <div className="wrap-products">
                  <OwlCarousel
                    className="products style-nav-1 equal-container" {...props.options} >
                    {props.items2.map((item) => {
                      return (
                        <div key={item.sno} className="item">
                          <div className="product product-style-2 equal-elem ">
                            <div className="product-thumnail">
                              <Link to="#" title={item.title}>
                                <figure>
                                  <img
                                    src={item.img}
                                    width="214"
                                    height="214"
                                    alt="T-Shirt Raw Hem Organic Boro Constrast Denim"
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
                {/* <!--End wrap-products--> */}
              </div>
            </div>
            {/* <!--end main content area--> */}
          </div>
          {/* <!--end container--> */}
        </main>

        {/* <!--main area--> */}
      </div>
    </>
  )
}

