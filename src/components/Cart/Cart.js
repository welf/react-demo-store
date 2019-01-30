import React from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import { withDataConsumer } from '../../hoc-helpers';
import EmptyCart from './EmptyCart';
import CartList from './CartList';
import CartTotals from './CartTotals';

const Cart = ({ cart }) => {
  if (cart.length === 0) {
    return <EmptyCart />;
  }
  return (
    <section className="container-fluid py-3 my-2">
      <Title name="your" title="cart" />
      <CartColumns />
      <CartList />
      <CartTotals />
    </section>
  );
};

const mapDataToCartProps = data => {
  return {
    cart: data.cart
  };
};

export default withDataConsumer(mapDataToCartProps)(Cart);
