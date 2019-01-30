import React from 'react';
import { Link } from 'react-router-dom';

import { withDataConsumer } from '../../hoc-helpers';

const CartItem = ({
  product,
  incrementCount,
  decrementCount,
  removeItem,
  history
}) => {
  const { id, title, img, price, count, total } = product;

  return (
    <div className="row d-flex align-items-center text-center text-capitalize my-3">
      <div className="col-10 col-lg-2 my-2 mx-auto">
        <Link to={`/details/${id}`}>
          <img
            src={img}
            alt={title}
            className="img-fluid"
            style={{ height: '5rem', width: 'auto' }}
          />
        </Link>
      </div>
      <div className="col-10 col-lg-2 my-1 mx-auto">
        <Link to={`/details/${id}`}>
          <span className="title-in-cart">{title}</span>
        </Link>
      </div>
      <div className="col-10 col-lg-2 my-1 mx-auto">$ {price.toFixed(2)}</div>
      {/* increment and decrement buttons */}
      <div className="col-10 col-lg-2 my-3 mx-auto">
        <div className="d-flex justify-content-center">
          <span
            className="btn btn-black mx-1"
            onClick={() => decrementCount(id, () => history.push('/'))}
          >
            -
          </span>
          <span className="btn mx-1 count">{count}</span>
          <span
            className="btn btn-black mx-1"
            onClick={() => incrementCount(id)}
          >
            +
          </span>
        </div>
      </div>
      {/* end of increment and decrement buttons */}
      <div className="col-10 col-lg-2 my-2 mx-auto">
        <div onClick={() => removeItem(id, () => history.push('/'))}>
          <i className="fas fa-trash-alt remove-item" />
        </div>
      </div>
      <div className="col-10 col-lg-2 mb-3 mx-auto font-weight-bold text-info">
        <span className="d-lg-none mr-2">Total:</span>$ {total.toFixed(2)}
      </div>
    </div>
  );
};

const mapDataToCartItemProps = data => {
  return {
    incrementCount: data.incrementCount,
    decrementCount: data.decrementCount,
    removeItem: data.removeItem,
    history: data.history
  };
};

export default withDataConsumer(mapDataToCartItemProps)(CartItem);
