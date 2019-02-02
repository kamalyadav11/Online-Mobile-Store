import React from "react";
import { Link } from "react-router-dom";

const CartTotals = ({ value }) => {
  const { cartSubtotl, cartTax, cartTotal, clearCart } = value;
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <Link to="/">
              <button
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                type="button"
                onClick={() => clearCart()}
              >
                clear cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CartTotals;
