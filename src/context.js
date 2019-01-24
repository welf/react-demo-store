import React from "react";

import { storeProducts } from "./data";

const DataStore = React.createContext();

const initialProductsState = storeProducts.map(item => ({ ...item }));

class DataProvider extends React.Component {
  state = {
    products: initialProductsState,
    cart: [],
    isModalOpen: false,
    productInModal: null
  };

  getProductById = (array, id) => array.find(product => product.id === id);

  addToCart = id => {
    this.setState(prevState => {
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

      const productForCart = this.getProductById(products, id);

      const cart = [...prevState.cart, productForCart];

      return { products, cart };
    });
  };

  openModal = id => {
    const productInModal = this.getProductById(this.state.cart, id);
    this.setState(prevState => ({
      ...prevState,
      isModalOpen: true,
      productInModal
    }));
  };

  closeModal = () => {
    this.setState(prevState => ({
      ...prevState,
      isModalOpen: false,
      productInModal: null
    }));
  };

  render() {
    return (
      <DataStore.Provider
        value={{
          products: [...this.state.products],
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          isModalOpen: this.state.isModalOpen,
          productInModal: this.state.productInModal
        }}
      >
        {this.props.children}
      </DataStore.Provider>
    );
  }
}

const DataConsumer = DataStore.Consumer;

export { DataProvider, DataConsumer };
