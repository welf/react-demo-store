import React from "react";
import { Link } from "react-router-dom";
import PayPalButton from "../PayPalButton";

const CartTotals = ({ value }) => {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 col-sm-8 mt-2 ml-sm-5 ml-md-auto text-right text-capitalize">
          <Link to="/">
            <button
              className="btn btn-outline-danger text-uppercase mb-3 px-5"
              onClick={clearCart}
            >
              <i className="fas fa-trash mr-3" />
              clear cart
            </button>
          </Link>
          <h5>
            <span className="text-title">subtotal: </span>
            <strong>$ {cartSubTotal.toFixed(2)}</strong>
          </h5>
          <h5>
            <span className="text-title">tax: </span>
            <strong>$ {cartTax.toFixed(2)}</strong>
          </h5>
          <h5>
            <span className="text-title">total: </span>
            <strong>$ {cartTotal.toFixed(2)}</strong>
          </h5>
          <PayPalButton value={value} />
        </div>
      </div>
    </div>
  );
};

export default CartTotals;
