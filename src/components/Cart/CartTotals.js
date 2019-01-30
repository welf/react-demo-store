import React from 'react';
import { Link } from 'react-router-dom';

import PayPalButton from '../PayPalButton';
import { withDataConsumer } from '../../hoc-helpers';

const CartTotals = ({ cartSubTotal, cartTax, cartTotal, clearCart }) => {
  return (
    <div className="row d-flex align-items-center text-center text-lg-right mr-lg-5 text-capitalize">
      <div className="col-10 col-lg-12 mx-auto text-capitalize">
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
        <h5 className="mb-3">
          <span className="text-title">total: </span>
          <strong>$ {cartTotal.toFixed(2)}</strong>
        </h5>
        <PayPalButton />
      </div>
    </div>
  );
};

const mapDataToCartTotalsProps = data => {
  return {
    cartSubTotal: data.cartSubTotal,
    cartTax: data.cartTax,
    cartTotal: data.cartTotal,
    clearCart: data.clearCart
  };
};

export default withDataConsumer(mapDataToCartTotalsProps)(CartTotals);
