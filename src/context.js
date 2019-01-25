import React from "react";
import { withRouter } from "react-router-dom";

import { storeProducts } from "./data";

const DataStore = React.createContext();

const initialProductsState = storeProducts.map(item => ({ ...item }));

class DataProviderWithRouter extends React.Component {
  state = {
    products: initialProductsState,
    cart: [],
    orders: [],
    isAfterPaymentModalOpen: false,
    paymentSuccess: false,
    paymentCancelled: false,
    paymentError: false,
    isModalOpen: false,
    productInModal: null,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
  };

  // Tax rate
  _tax = 0.22;

  // =====
  // helper functions for other functions of this component
  getProductById = (array, id) => array.find(product => product.id === id);

  // All objects are copying by reference, so we need to destructure them to achieve immutability
  spreadAllObjects = objectArray => objectArray.map(item => ({ ...item }));

  increaseCount = (arr, id) => {
    return arr.map(i => {
      if (i.id === id) {
        return {
          ...i,
          inCart: true,
          count: i.count + 1,
          total: i.total + i.price
        };
      }
      return { ...i };
    });
  };

  decreaseCount = (arr, id) => {
    return arr.map(i => {
      if (i.id === id) {
        if (i.count === 1) {
          return {
            ...i,
            inCart: false,
            count: 0,
            total: 0
          };
        }
        return { ...i, count: i.count - 1, total: i.total - i.price };
      }
      return { ...i };
    });
  };

  updateCartTotals = () => {
    this.setState(prevState => {
      const cartSubTotal = prevState.cart.reduce(
        (accumulator, product) => accumulator + product.total,
        0
      );
      const cartTax = cartSubTotal * this._tax;
      const cartTotal = cartSubTotal + cartTax;

      return {
        cartSubTotal,
        cartTax,
        cartTotal
      };
    });
  };

  removeAllProductsFromCart = arr => {
    return arr.map(product => ({
      ...product,
      inCart: false,
      count: 0,
      total: 0
    }));
  };

  clearPaymentInfo = () =>
    this.setState({
      paymentSuccess: false,
      paymentError: false,
      paymentCancelled: false
    });

  // =====
  // functions for other components
  addToCart = id => {
    this.setState(
      prevState => {
        const products = this.increaseCount(prevState.products, id);

        const productForCart = this.getProductById(products, id);

        const cart = [...prevState.cart, productForCart];

        return { products, cart };
      },
      () => this.updateCartTotals()
    );
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
      isAfterPaymentModalOpen: false,
      productInModal: null
    }));
  };

  incrementCount = id => {
    this.setState(
      prevState => {
        const products = this.increaseCount(prevState.products, id);
        const cart = this.increaseCount(prevState.cart, id);

        return {
          products,
          cart
        };
      },
      () => this.updateCartTotals()
    );
  };

  decrementCount = id => {
    this.setState(
      prevState => {
        const products = this.decreaseCount(prevState.products, id);
        const cart = this.decreaseCount(prevState.cart, id);
        const filteredCart = cart.filter(product => product.count > 0);

        return {
          products,
          cart: filteredCart
        };
      },
      () => this.updateCartTotals()
    );
  };

  removeItem = id => {
    this.setState(
      prevState => {
        const products = prevState.products.map(product => {
          if (product.id === id) {
            return { ...product, inCart: false, count: 0, total: 0 };
          }
          return { ...product };
        });
        const cart = prevState.cart.filter(product => product.id !== id);

        return { products, cart };
      },
      () => this.updateCartTotals()
    );
  };

  clearCart = () => {
    this.setState(prevState => {
      const products = this.removeAllProductsFromCart(prevState.products);

      return {
        products,
        cart: [],
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0
      };
    });
  };

  onPaymentSuccess = ({ payerID, paymentID, paymentToken, email, address }) => {
    this.setState(
      prevState => {
        const products = this.removeAllProductsFromCart(prevState.products);
        const orderItems = this.removeAllProductsFromCart(
          this.spreadAllObjects(prevState.cart)
        );
        const order = {
          payerID,
          paymentID,
          paymentToken,
          email,
          address,
          orderItems,
          orderSubTotal: prevState.cartSubTotal,
          orderTax: prevState.cartTax,
          orderTotal: prevState.cartTotal
        };
        const orders = [order, this.spreadAllObjects(prevState.orders)];

        return {
          products,
          orders
        };
      },
      () => {
        this.clearCart();
        this.setState({
          isAfterPaymentModalOpen: true,
          paymentSuccess: true
        });
      }
    );
  };

  onPaymentCancelled = () => this.setState({ paymentCancelled: true });

  onPaymentError = () => this.setState({ paymentError: true });

  // =====
  // life cycle functions
  render() {
    const { match, history, location } = this.props;
    return (
      <DataStore.Provider
        value={{
          // ===== STATE =====
          ...this.state,
          // ===== METHODS =====
          // cart methods
          addToCart: this.addToCart,
          incrementCount: this.incrementCount,
          decrementCount: this.decrementCount,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
          // after payment methods
          onPaymentSuccess: this.onPaymentSuccess,
          onPaymentCancelled: this.onPaymentCancelled,
          onPaymentError: this.onPaymentError,
          // modal window methods
          openModal: this.openModal,
          closeModal: this.closeModal,
          clearPaymentInfo: this.clearPaymentInfo,
          // ===== from withRouter =====
          match: match,
          history: history,
          location: location
        }}
      >
        {this.props.children}
      </DataStore.Provider>
    );
  }
}

const DataConsumer = DataStore.Consumer;
const DataProvider = withRouter(DataProviderWithRouter);

export { DataProvider, DataConsumer };
