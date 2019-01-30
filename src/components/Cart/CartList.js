import React from 'react';

import { withDataConsumer } from '../../hoc-helpers';
import CartItem from './CartItem';

const CartList = ({ cart }) => {
  const cartProducts = cart.map(product => (
    <CartItem key={product.id} product={product} />
  ));

  return <div>{cartProducts}</div>;
};

const mapDatatoCartListProps = data => {
  return {
    cart: data.cart
  };
};

export default withDataConsumer(mapDatatoCartListProps)(CartList);
