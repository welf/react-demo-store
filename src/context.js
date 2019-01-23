import React from "react";

import { storeProducts } from "./data";

const DataStore = React.createContext();

class DataProvider extends React.Component {
  state = {
    products: []
  };

  setProducts = () => {
    const products = storeProducts.map(item => ({ ...item }));
    this.setState({ products });
  };

  componentDidMount = () => {
    this.setProducts();
  };

  render() {
    return (
      <DataStore.Provider value={{ ...this.state }}>
        {this.props.children}
      </DataStore.Provider>
    );
  }
}

const DataConsumer = DataStore.Consumer;

export { DataProvider, DataConsumer };
