import React from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Modal from "./components/Modal";
import { DataConsumer } from "./context";
import { Switch, Route } from "react-router-dom";
import PaymentNotification from "./components/PaymentNotification";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route
          path="/details/:id"
          render={({ match }) => <Details id={match.params.id} />}
        />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
      <DataConsumer>
        {({ isModalOpen, paymentSuccess, paymentCancelled, paymentError }) =>
          isModalOpen ? (
            <Modal />
          ) : paymentSuccess || paymentCancelled || paymentError ? (
            <PaymentNotification />
          ) : null
        }
      </DataConsumer>
    </React.Fragment>
  );
};

export default App;
