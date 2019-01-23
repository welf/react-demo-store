import React from "react";

import { storeProducts } from "./data";

const DataStore = React.createContext();

const initialProductsState = storeProducts.map(item => ({ ...item }));

class DataProvider extends React.Component {
  state = {
    products: initialProductsState
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
