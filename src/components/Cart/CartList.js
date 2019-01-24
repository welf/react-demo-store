import React from "react";
import CartItem from "./CartItem";

const CartList = ({ value }) => {
  return (
    <div className="container-fluid">
      {value.cart.map(product => (
        <CartItem key={product.id} item={product} value={value} />
      ))}
    </div>
  );
};

export default CartList;
