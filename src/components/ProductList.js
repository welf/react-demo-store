import React from "react";

import Product from "./Product";
import Title from "./Title";
import { DataConsumer } from "../context";

const ProductList = () => {
  return (
    <section className="py-5">
      <div className="container">
        <Title name="our" title="products" />
        <div className="row">
          <DataConsumer>
            {({ products, addToCart }) =>
              products.map(product => {
                return (
                  <Product
                    key={product.id}
                    product={product}
                    addToCart={addToCart}
                  />
                );
              })
            }
          </DataConsumer>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
