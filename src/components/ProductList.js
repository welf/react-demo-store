import React from "react";

import Product from "./Product";
import Title from "./Title";
import { DataConsumer } from "../context";

const ProductList = () => {
  return (
    <section className="container py-3">
      <Title name="our" title="products" />
      <div className="row">
        <DataConsumer>
          {({ products }) => {
            return <h1>{products[0].title}</h1>;
          }}
        </DataConsumer>
        <Product />
      </div>
    </section>
  );
};

export default ProductList;
