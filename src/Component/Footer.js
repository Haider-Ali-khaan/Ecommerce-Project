import React from "react";
import { Link } from "react-router-dom";

export default function Footer(props) {
  return (
    <>
    {/* <!--footer area--> */}
    <footer id="footer">
      <div className="wrap-footer-content footer-style-1">
        <div className="wrap-function-info">
          <div className="container">
            <ul>
              <li className="fc-info-item">
                <i className="fa fa-truck" aria-hidden="true"></i>
                <div className="wrap-left-info">
                  <h4 className="fc-name">Free Shipping</h4>
                  <p className="fc-desc">Free On Oder Over $99</p>
                </div>
              </li>
              <li className="fc-info-item">
                <i className="fa fa-recycle" aria-hidden="true"></i>
                <div className="wrap-left-info">
                  <h4 className="fc-name">Guarantee</h4>
                  <p className="fc-desc">30 Days Money Back</p>
                </div>
              </li>
              <li className="fc-info-item">
                <i className="fa fa-credit-card-alt" aria-hidden="true"></i>
                <div className="wrap-left-info">
                  <h4 className="fc-name">Safe Payment</h4>
                  <p className="fc-desc">Safe your online payment</p>
                </div>
              </li>
              <li className="fc-info-item">
                <i className="fa fa-life-ring" aria-hidden="true"></i>
                <div className="wrap-left-info">
                  <h4 className="fc-name">Online Suport</h4>
                  <p className="fc-desc">We Have Support 24/7</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* <!--End function info--> */}

        <div className="main-footer-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-sm-4 col-md-4 col-xs-12">
                <div className="wrap-footer-item">
                  <h3 className="item-header">Contact Details</h3>
                  <div className="item-content">
                    <div className="wrap-contact-detail">
                      <ul>
                        <li>
                          <i
                            className="fa fa-map-marker"
                            aria-hidden="true"
                          ></i>
                          <p className="contact-txt">
                            45 Grand Central Terminal New York,NY 1017 United
                            State USA
                          </p>
                        </li>
                        <li>
                          <i className="fa fa-phone" aria-hidden="true"></i>
                          <p className="contact-txt">
                            (+123) 456 789 - (+123) 666 888
                          </p>
                        </li>
                        <li>
                          <i
                            className="fa fa-envelope"
                            aria-hidden="true"
                          ></i>
                          <p className="contact-txt">
                            Contact@yourcompany.com
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-sm-4 col-md-4 col-xs-12">
                <div className="wrap-footer-item">
                  <h3 className="item-header">Hot Line</h3>
                  <div className="item-content">
                    <div className="wrap-hotline-footer">
                      <span className="desc">Call Us toll Free</span>
                      <b className="phone-number">
                        (+123) 456 789 - (+123) 666 888
                      </b>
                    </div>
                  </div>
                </div>

                <div className="wrap-footer-item footer-item-second">
                  <h3 className="item-header">Sign up for newsletter</h3>
                  <div className="item-content">
                    <div className="wrap-newletter-footer">
                      <form
                        action="#"
                        className="frm-newletter"
                        id="frm-newletter"
                      >
                        <input
                          type="email"
                          className="input-email"
                          name="email"
                          // value=""
                          placeholder="Enter your email address"
                        />
                        <button className="btn-submit">Subscribe</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-sm-4 col-md-4 col-xs-12 box-twin-content ">
                <div className="row">
                  <div className="wrap-footer-item twin-item">
                    <h3 className="item-header">My Account</h3>
                    <div className="item-content">
                      <div className="wrap-vertical-nav">
                        <ul>
                          <li className="menu-item">
                            <Link to="#" className="link-term">
                              My Account
                            </Link>
                          </li>
                          <li className="menu-item">
                            <Link to="#" className="link-term">
                              Brands
                            </Link>
                          </li>
                          <li className="menu-item">
                            <Link to="#" className="link-term">
                              Gift Certificates
                            </Link>
                          </li>
                          <li className="menu-item">
                            <Link to="#" className="link-term">
                              Affiliates
                            </Link>
                          </li>
                          <li className="menu-item">
                            <Link to="#" className="link-term">
                              Wish list
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="wrap-footer-item twin-item">
                    <h3 className="item-header">Infomation</h3>
                    <div className="item-content">
                      <div className="wrap-vertical-nav">
                        <ul>
                          <li className="menu-item">
                            <Link to="#" className="link-term">
                              Contact Us
                            </Link>
                          </li>
                          <li className="menu-item">
                            <Link to="#" className="link-term">
                              Returns
                            </Link>
                          </li>
                          <li className="menu-item">
                            <Link to="#" className="link-term">
                              Site Map
                            </Link>
                          </li>
                          <li className="menu-item">
                            <Link to="#" className="link-term">
                              Specials
                            </Link>
                          </li>
                          <li className="menu-item">
                            <Link to="#" className="link-term">
                              Order History
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4 col-sm-4 col-md-4 col-xs-12">
                <div className="wrap-footer-item">
                  <h3 className="item-header">We Using Safe Payments:</h3>
                  <div className="item-content">
                    <div className="wrap-list-item wrap-gallery">
                      <img
                        src="assets/images/payment.png"
                        className="payment"
                        alt="img"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-sm-4 col-md-4 col-xs-12">
                <div className="wrap-footer-item">
                  <h3 className="item-header">Social network</h3>
                  <div className="item-content">
                    <div className="wrap-list-item social-network">
                      <ul>
                        <li>
                          <Link
                            to="#"
                            className="link-to-item"
                            title="twitter"
                          >
                            <i
                              className="fa fa-twitter"
                              aria-hidden="true"
                            ></i>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="link-to-item"
                            title="facebook"
                          >
                            <i
                              className="fa fa-facebook"
                              aria-hidden="true"
                            ></i>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="link-to-item"
                            title="pinterest"
                          >
                            <i
                              className="fa fa-pinterest"
                              aria-hidden="true"
                            ></i>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="link-to-item"
                            title="instagram"
                          >
                            <i
                              className="fa fa-instagram"
                              aria-hidden="true"
                            ></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#" className="link-to-item" title="vimeo">
                            <i className="fa fa-vimeo" aria-hidden="true"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-sm-4 col-md-4 col-xs-12">
                <div className="wrap-footer-item">
                  <h3 className="item-header">Download App</h3>
                  <div className="item-content">
                    <div className="wrap-list-item apps-list">
                      <ul>
                        <li>
                          <Link
                            to="#"
                            className="link-to-item"
                            title="our application on apple store"
                          >
                            <figure>
                              <img
                                src="assets/images/brands/apple-store.png"
                                alt="apple store"
                                width="128"
                                height="36"
                              />
                            </figure>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="link-to-item"
                            title="our application on google play store"
                          >
                            <figure>
                              <img
                                src="assets/images/brands/google-play-store.png"
                                alt="google play store"
                                width="128"
                                height="36"
                              />
                            </figure>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="wrap-back-link">
            <div className="container">
              <div className="back-link-box">
                <h3 className="backlink-title">Quick Links</h3>
                <div className="back-link-row">
                  <ul className="list-back-link">
                    <li>
                      <span className="row-title">Mobiles:</span>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="redirect-back-link"
                        title="mobile"
                      >
                        Mobiles
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="redirect-back-link"
                        title="yphones"
                      >
                        YPhones
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="redirect-back-link"
                        title="Gianee Mobiles GL"
                      >
                        Gianee Mobiles GL
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="redirect-back-link"
                        title="Mobiles Karbonn"
                      >
                        Mobiles Karbonn
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="redirect-back-link"
                        title="Mobiles Viva"
                      >
                        Mobiles Viva
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="redirect-back-link"
                        title="Mobiles Intex"
                      >
                        Mobiles Intex
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="redirect-back-link"
                        title="Mobiles Micrumex"
                      >
                        Mobiles Micrumex
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="redirect-back-link"
                        title="Mobiles Bsus"
                      >
                        Mobiles Bsus
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="redirect-back-link"
                        title="Mobiles Samsyng"
                      >
                        Mobiles Samsyng
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="redirect-back-link"
                        title="Mobiles Lenova"
                      >
                        Mobiles Lenova
                      </Link>
                    </li>
                  </ul>

                  <ul className="list-back-link">
                    <li>
                      <span className="row-title">Tablets:</span>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="redirect-back-link"
                        title="Plesc YPads"
                      >
                        Plesc YPads
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="redirect-back-link"
                        title="Samsyng Tablets"
                      >
                        Samsyng Tablets
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="redirect-back-link"
                        title="Qindows Tablets"
                      >
                        Qindows Tablets
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="redirect-back-link"
                        title="Calling Tablets"
                      >
                        Calling Tablets
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="redirect-back-link"
                        title="Micrumex Tablets"
                      >
                        Micrumex Tablets
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="redirect-back-link"
                        title="Lenova Tablets Bsus"
                      >
                        Lenova Tablets Bsus
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="redirect-back-link"
                        title="Tablets iBall"
                      >
                        Tablets iBall
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="redirect-back-link"
                        title="Tablets Swipe"
                      >
                        Tablets Swipe
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="redirect-back-link"
                        title="Tablets TVs, Audio"
                      >
                        Tablets TVs, Audio
                      </Link>
                    </li>
                  </ul>

                  <ul className="list-back-link">
                    <li>
                      <span className="row-title">Fashion:</span>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="redirect-back-link"
                        title="Sarees Silk"
                      >
                        Sarees Silk
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="redirect-back-link"
                        title="sarees Salwar"
                      >
                        sarees Salwar
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="redirect-back-link"
                        title="Suits Lehengas"
                      >
                        Suits Lehengas
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="redirect-back-link"
                        title="Biba Jewellery"
                      >
                        Biba Jewellery
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="redirect-back-link"
                        title="Rings Earrings"
                      >
                        Rings Earrings
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="redirect-back-link"
                        title="Diamond Rings"
                      >
                        Diamond Rings
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="redirect-back-link"
                        title="Loose Diamond Shoes"
                      >
                        Loose Diamond Shoes
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="redirect-back-link"
                        title="BootsMen Watches"
                      >
                        BootsMen Watches
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="redirect-back-link"
                        title="Women Watches"
                      >
                        Women Watches
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="coppy-right-box">
          <div className="container">
            <div className="coppy-right-item item-left">
              <p className="coppy-right-text">
                Copyright © 2020 Surfside Media. All rights reserved
              </p>
            </div>
            <div className="coppy-right-item item-right">
              <div className="wrap-nav horizontal-nav">
                <ul>
                  <li className="menu-item">
                    <Link to="about-us.html" className="link-term">
                      About us
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link to="privacy-policy.html" className="link-term">
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link to="terms-conditions.html" className="link-term">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li className="menu-item">
                    <Link to="return-policy.html" className="link-term">
                      Return Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    </footer>
  </>
  )
}
