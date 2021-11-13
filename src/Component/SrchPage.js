import React from "react";
import { Link } from "react-router-dom";

export default function SrchPage(props) {
  return (
    <>
    {console.log(props.srchproduct)}
      {props.srchproduct.length === 0 && (

        <div id="cartEmpty">
          <div>This Name Was Not Matched With any Prouduct</div>
        </div>
      )

      }

      {props.items2.map((item) => {
        return (
          props.srchproduct.map((i) => {
            if (item.sno === i.sno) {
              return (
                <div key={i.sno} className="row">
                  <ul className="product-list grid-products equal-container">
                    <li
                      className="col-lg-4 col-md-6 col-sm-6 col-xs-6 "
                    >
                      <div className="product product-style-3 equal-elem ">
                        <div className="product-thumnail">
                          <Link
                            to="/ItemDetail"
                            title={i.title}
                            onClick={() => props.selectitem(i)}
                          >
                            <figure>
                              <img src={i.img} alt={i.title} />
                            </figure>
                          </Link>
                        </div>
                        <div className="product-info">
                          <Link to="/ItemDetail" className="product-name">
                            <span>{i.name}</span>
                          </Link>
                          <div className="wrap-price">
                            <span className="product-price">${i.price}</span>
                          </div>

                          <Link
                            to="#"
                            onClick={() => props.AddtoCart(i)}
                            className="btn add-to-cart"
                          >
                            Add To Cart
                          </Link>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

              )
            }
            return ""
          })

        )
      })}
    </>
  );
}
