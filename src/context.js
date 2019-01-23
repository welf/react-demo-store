import React from "react";

import { storeProducts } from "./data";

const DataStore = React.createContext();

const initialProductsState = storeProducts.map(item => ({ ...item }));

class DataProvider extends React.Component {
  state = {
    products: initialProductsState,
    cart: []
  };

  addToCart = id => {
    this.setState(
      prevState => {
        const products = prevState.products.map(product => {
          if (product.id === id) {
            return {
              ...product,
              inCart: true,
              count: 1,
              total: product.price
            };
          }
          return { ...product };
        });

        const productToAdd = products.find(product => product.id === id);

        const cart = [...prevState.cart, productToAdd];

        return { products, cart };
      },
      () => console.log(this.state)
    );
  };

  render() {
    return (
      <DataStore.Provider
        value={{
          products: [...this.state.products],
          addToCart: this.addToCart
        }}
      >
        {this.props.children}
      </DataStore.Provider>
    );
  }
}

const DataConsumer = DataStore.Consumer;

export { DataProvider, DataConsumer };
