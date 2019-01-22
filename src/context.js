import React from "react";

import { storeProducts } from "./data";

const DataStore = React.createContext();

class DataProvider extends React.Component {
  state = {
    products: storeProducts
  };

  render() {
    return (
      <DataStore.Provider value={this.state}>
        {this.props.children}
      </DataStore.Provider>
    );
  }
}

const DataConsumer = DataStore.Consumer;

export { DataProvider, DataConsumer };
