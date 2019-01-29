import React from 'react';

import Product from './Product';
import Title from './Title';
import withDataConsumer from '../hoc-helpers/withDataConsumer';

const ProductList = props => {
  const { products } = props;
  const listOfProducts = products.map(product => (
    <Product key={product.id} product={product} {...props} />
  ));

  return (
    <section className="py-5">
      <div className="container">
        <Title name="our" title="products" />
        <div className="row">{listOfProducts}</div>
      </div>
    </section>
  );
};

const mapDataToProductListProps = data => {
  return {
    products: data.products,
    addToCart: data.addToCart,
    openModal: data.openModal
  };
};

export default withDataConsumer(mapDataToProductListProps)(ProductList);
