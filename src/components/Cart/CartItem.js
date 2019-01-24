import React from "react";
import { Link } from "react-router-dom";

const CartItem = ({ item, value }) => {
  const { id, title, img, price, count, total } = item;
  const { incrementCount, decrementCount, removeItem, clearCart } = value;
  return (
    <div className="row text-center text-capitalize mb-4">
      <div className="col-10 col-lg-2 my-2 d-flex align-items-center justify-content-center">
        <Link to={`/details/${id}`}>
          <img
            src={img}
            alt={title}
            className="img-fluid"
            style={{ height: "5rem", width: "auto" }}
          />
        </Link>
      </div>
      <div className="col-10 col-lg-2 my-2 d-flex align-items-center justify-content-center">
        <span className="d-lg-none">product: </span>
        <Link to={`/details/${id}`}>
          <span className="title-in-cart">{title}</span>
        </Link>
      </div>
      <div className="col-10 col-lg-2 my-2 d-flex align-items-center justify-content-center">
        <span className="d-lg-none">price: </span>${price.toFixed(2)}
      </div>
      {/* increment and decrement buttons */}
      <div className="col-10 col-lg-2 my-2 d-flex align-items-center justify-content-center">
        <div className="d-flex justify-content-center">
          <span
            className="btn btn-black mx-1"
            onClick={() => decrementCount(id)}
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
      <div className="col-10 col-lg-2 my-2 d-flex align-items-center justify-content-center">
        <i
          className="fas fa-trash remove-item"
          onClick={() => removeItem(id)}
        />
      </div>
      <div className="col-10 col-lg-2 my-2 d-flex align-items-center justify-content-center">
        <span className="d-lg-none">item total: </span>${total.toFixed(2)}
      </div>
    </div>
  );
};

export default CartItem;
