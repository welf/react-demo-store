import React from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import { DataConsumer } from "../../context";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";

const Cart = () => {
  return (
    <section>
      <DataConsumer>
        {value => {
          if (value.cart.length === 0) {
            return <EmptyCart />;
          }
          return (
            <React.Fragment>
              <Title name="your" title="cart" />
              <CartColumns />
              <CartList value={value} />
            </React.Fragment>
          );
        }}
      </DataConsumer>
    </section>
  );
};

export default Cart;
