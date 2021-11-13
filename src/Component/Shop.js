import React from "react";
import { Link, Redirect } from "react-router-dom";


export default function Shop(props) {

  document.title = "shop";

  return (
    <>
      {props.login === false && props.showAlertForLoginf()}

      {props.login === false && <Redirect to="/login" />}
      {props.login === true &&
        <main id="main" className="main-site left-sidebar">
          <div className="container">
            <div className="wrap-breadcrumb">
              <ul>
                <li className="item-link">
                  <Link to="/" className="link">
                    home
                  </Link>
                </li>
                <li className="item-link">
                  <span>Digital & Electronics</span>
                </li>
              </ul>
            </div>
            <div className="row">
              <div className="col-lg-9 col-md-8 col-sm-8 col-xs-12 main-content-area">
                <div className="banner-shop">
                  <Link to="#" className="banner-link">
                    <figure>
                      <img src="assets/images/shop-banner.jpg" alt="" />
                    </figure>
                  </Link>
                </div>

                <div className="wrap-shop-control">
                  <h1 className="shop-title">Digital & Electronics</h1>

                  <div className="wrap-right">
                    <div className="sort-item orderby ">
                      <select name="orderby" className="use-chosen">
                        <option>Default sorting</option>
                        <option>Sort by popularity</option>
                        <option>Sort by average rating</option>
                        <option>Sort by newness</option>
                        <option>Sort by price: low to high</option>
                        <option>Sort by price: high to low</option>
                      </select>
                    </div>

                    <div className="sort-item product-per-page">
                      <select name="post-per-page" className="use-chosen">
                        <option>12 per page</option>
                        <option>16 per page</option>
                        <option>18 per page</option>
                        <option>21 per page</option>
                        <option>24 per page</option>
                        <option>30 per page</option>
                        <option>32 per page</option>
                      </select>
                    </div>

                    <div className="change-display-mode">
                      <Link to="#" className="grid-mode display-mode active">
                        <i className="fa fa-th"></i>Grid
                      </Link>
                      <Link to="list.html" className="list-mode display-mode">
                        <i className="fa fa-th-list"></i>List
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <ul className="product-list grid-products equal-container">
                    {props.items2.map((item) => {
                      return (
                        <li
                          key={item.sno}
                          className="col-lg-4 col-md-6 col-sm-6 col-xs-6 "
                        >
                          <div className="product product-style-3 equal-elem ">
                            <div className="product-thumnail">
                              <Link to="/ItemDetail" title={item.title} onClick={() => props.selectitem(item)}>
                                <figure>
                                  <img src={item.img} alt={item.title} />
                                </figure>
                              </Link>
                            </div>
                            <div className="product-info">
                              <Link to="/ItemDetail" className="product-name">
                                <span>{item.name}</span>
                              </Link>
                              <div className="wrap-price">
                                <span className="product-price">${item.price}</span>
                              </div>

                              <Link
                                to="#"
                                onClick={() => props.AddtoCart(item)}
                                className="btn add-to-cart"
                              >
                                Add To Cart
                              </Link>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* pagination */}

                {/* <div className="wrap-pagination-info">
                <ul className="page-numbers">
                  <li>
                    <span className="page-number-item current">1</span>
                  </li>
                  <li>
                    <Link className="page-number-item" to="#">
                      2
                    </Link>
                  </li>
                  <li>
                    <Link className="page-number-item" to="#">
                      3
                    </Link>
                  </li>
                  <li>
                    <Link className="page-number-item next-link" to="#">
                      Next
                    </Link>
                  </li>
                </ul>
                <p className="result-count">Showing 1-8 of 12 result</p>
              </div> */}

                {/* pagination */}
              </div>

              <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12 sitebar">
                <div className="widget mercado-widget categories-widget">
                  <h2 className="widget-title">All Categories</h2>
                  <div className="widget-content">
                    <ul className="list-category">
                      <li className="category-item has-child-cate">
                        <Link to="#" className="cate-link">
                          Fashion & Accessories
                        </Link>
                        <span className="toggle-control">+</span>
                        <ul className="sub-cate">
                          <li className="category-item">
                            <Link to="#" className="cate-link">
                              Batteries (22)
                            </Link>
                          </li>
                          <li className="category-item">
                            <Link to="#" className="cate-link">
                              Headsets (16)
                            </Link>
                          </li>
                          <li className="category-item">
                            <Link to="#" className="cate-link">
                              Screen (28)
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="category-item has-child-cate">
                        <Link to="#" className="cate-link">
                          Furnitures & Home Decors
                        </Link>
                        <span className="toggle-control">+</span>
                        <ul className="sub-cate">
                          <li className="category-item">
                            <Link to="#" className="cate-link">
                              Batteries (22)
                            </Link>
                          </li>
                          <li className="category-item">
                            <Link to="#" className="cate-link">
                              Headsets (16)
                            </Link>
                          </li>
                          <li className="category-item">
                            <Link to="#" className="cate-link">
                              Screen (28)
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="category-item has-child-cate">
                        <Link to="#" className="cate-link">
                          Digital & Electronics
                        </Link>
                        <span className="toggle-control">+</span>
                        <ul className="sub-cate">
                          <li className="category-item">
                            <Link to="#" className="cate-link">
                              Batteries (22)
                            </Link>
                          </li>
                          <li className="category-item">
                            <Link to="#" className="cate-link">
                              Headsets (16)
                            </Link>
                          </li>
                          <li className="category-item">
                            <Link to="#" className="cate-link">
                              Screen (28)
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="category-item">
                        <Link to="#" className="cate-link">
                          Tools & Equipments
                        </Link>
                      </li>
                      <li className="category-item">
                        <Link to="#" className="cate-link">
                          Kid’s Toys
                        </Link>
                      </li>
                      <li className="category-item">
                        <Link to="#" className="cate-link">
                          Organics & Spa
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="widget mercado-widget filter-widget brand-widget">
                  <h2 className="widget-title">Brand</h2>
                  <div className="widget-content">
                    <ul
                      className="list-style vertical-list list-limited"
                      data-show="6"
                    >
                      <li className="list-item">
                        <Link className="filter-link active" to="#">
                          Fashion Clothings
                        </Link>
                      </li>
                      <li className="list-item">
                        <Link className="filter-link " to="#">
                          Laptop Batteries
                        </Link>
                      </li>
                      <li className="list-item">
                        <Link className="filter-link " to="#">
                          Printer & Ink
                        </Link>
                      </li>
                      <li className="list-item">
                        <Link className="filter-link " to="#">
                          CPUs & Prosecsors
                        </Link>
                      </li>
                      <li className="list-item">
                        <Link className="filter-link " to="#">
                          Sound & Speaker
                        </Link>
                      </li>
                      <li className="list-item">
                        <Link className="filter-link " to="#">
                          Shop Smartphone & Tablets
                        </Link>
                      </li>
                      <li className="list-item default-hiden">
                        <Link className="filter-link " to="#">
                          Printer & Ink
                        </Link>
                      </li>
                      <li className="list-item default-hiden">
                        <Link className="filter-link " to="#">
                          CPUs & Prosecsors
                        </Link>
                      </li>
                      <li className="list-item default-hiden">
                        <Link className="filter-link " to="#">
                          Sound & Speaker
                        </Link>
                      </li>
                      <li className="list-item default-hiden">
                        <Link className="filter-link " to="#">
                          Shop Smartphone & Tablets
                        </Link>
                      </li>
                      <li className="list-item">
                        <Link
                          data-label='Show less<i className="fa fa-angle-up" aria-hidden="true"></i>'
                          className="btn-control control-show-more"
                          to="#"
                        >
                          Show more
                          <i className="fa fa-angle-down" aria-hidden="true"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="widget mercado-widget filter-widget price-filter">
                  <h2 className="widget-title">Price</h2>
                  <div className="widget-content">
                    <div id="slider-range"></div>
                    <p>
                      <label htmlFor="amount">Price:</label>
                      <input type="text" id="amount" name="amount" readOnly />
                      <button className="filter-submit">Filter</button>
                    </p>
                  </div>
                </div>

                <div className="widget mercado-widget filter-widget">
                  <h2 className="widget-title">Color</h2>
                  <div className="widget-content">
                    <ul className="list-style vertical-list has-count-index">
                      <li className="list-item">
                        <Link className="filter-link " to="#">
                          Red <span>(217)</span>
                        </Link>
                      </li>
                      <li className="list-item">
                        <Link className="filter-link " to="#">
                          Yellow <span>(179)</span>
                        </Link>
                      </li>
                      <li className="list-item">
                        <Link className="filter-link " to="#">
                          Black <span>(79)</span>
                        </Link>
                      </li>
                      <li className="list-item">
                        <Link className="filter-link " to="#">
                          Blue <span>(283)</span>
                        </Link>
                      </li>
                      <li className="list-item">
                        <Link className="filter-link " to="#">
                          Grey <span>(116)</span>
                        </Link>
                      </li>
                      <li className="list-item">
                        <Link className="filter-link " to="#">
                          Pink <span>(29)</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="widget mercado-widget filter-widget">
                  <h2 className="widget-title">Size</h2>
                  <div className="widget-content">
                    <ul className="list-style inline-round ">
                      <li className="list-item">
                        <Link className="filter-link active" to="#">
                          s
                        </Link>
                      </li>
                      <li className="list-item">
                        <Link className="filter-link " to="#">
                          M
                        </Link>
                      </li>
                      <li className="list-item">
                        <Link className="filter-link " to="#">
                          l
                        </Link>
                      </li>
                      <li className="list-item">
                        <Link className="filter-link " to="#">
                          xl
                        </Link>
                      </li>
                    </ul>
                    <div className="widget-banner">
                      <figure>
                        <img
                          src="assets/images/size-banner-widget.jpg"
                          width="270"
                          height="331"
                          alt=""
                        />
                      </figure>
                    </div>
                  </div>
                </div>

                <div className="widget mercado-widget widget-product">
                  <h2 className="widget-title">Popular Products</h2>
                  <div className="widget-content">
                    <ul className="products">
                      <li className="product-item">
                        <div className="product product-widget-style">
                          <div className="thumbnnail">
                            <Link
                              to="/ItemDetail"
                              title="Radiant-360 R6 Wireless Omnidirectional Speaker [White]"
                            >
                              <figure>
                                <img
                                  src="assets/images/products/digital_01.jpg"
                                  alt=""
                                />
                              </figure>
                            </Link>
                          </div>
                          <div className="product-info">
                            <Link to="#" className="product-name">
                              <span>
                                Radiant-360 R6 Wireless Omnidirectional Speaker...
                              </span>
                            </Link>
                            <div className="wrap-price">
                              <span className="product-price">$168.00</span>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li className="product-item">
                        <div className="product product-widget-style">
                          <div className="thumbnnail">
                            <Link
                              to="/ItemDetail"
                              title="Radiant-360 R6 Wireless Omnidirectional Speaker [White]"
                            >
                              <figure>
                                <img
                                  src="assets/images/products/digital_17.jpg"
                                  alt=""
                                />
                              </figure>
                            </Link>
                          </div>
                          <div className="product-info">
                            <Link to="#" className="product-name">
                              <span>
                                Radiant-360 R6 Wireless Omnidirectional Speaker...
                              </span>
                            </Link>
                            <div className="wrap-price">
                              <span className="product-price">$168.00</span>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li className="product-item">
                        <div className="product product-widget-style">
                          <div className="thumbnnail">
                            <Link
                              to="/ItemDetail"
                              title="Radiant-360 R6 Wireless Omnidirectional Speaker [White]"
                            >
                              <figure>
                                <img
                                  src="assets/images/products/digital_18.jpg"
                                  alt=""
                                />
                              </figure>
                            </Link>
                          </div>
                          <div className="product-info">
                            <Link to="#" className="product-name">
                              <span>
                                Radiant-360 R6 Wireless Omnidirectional Speaker...
                              </span>
                            </Link>
                            <div className="wrap-price">
                              <span className="product-price">$168.00</span>
                            </div>
                          </div>
                        </div>
                      </li>

                      <li className="product-item">
                        <div className="product product-widget-style">
                          <div className="thumbnnail">
                            <Link
                              to="/ItemDetail"
                              title="Radiant-360 R6 Wireless Omnidirectional Speaker [White]"
                            >
                              <figure>
                                <img
                                  src="assets/images/products/digital_20.jpg"
                                  alt=""
                                />
                              </figure>
                            </Link>
                          </div>
                          <div className="product-info">
                            <Link to="#" className="product-name">
                              <span>
                                Radiant-360 R6 Wireless Omnidirectional Speaker...
                              </span>
                            </Link>
                            <div className="wrap-price">
                              <span className="product-price">$168.00</span>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>}


    </>
  )
}

