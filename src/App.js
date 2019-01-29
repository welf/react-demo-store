import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withDataConsumer } from './hoc-helpers';
import { Switch, Route } from 'react-router-dom';
import asyncComponent from './components/AsyncComponent';

const AsyncNavbar = asyncComponent(() => import('./components/Navbar'));
const AsyncProductList = asyncComponent(() =>
  import('./components/ProductList')
);
const AsyncDetails = asyncComponent(() => import('./components/Details'));
const AsyncCart = asyncComponent(() => import('./components/Cart'));
const AsyncDefault = asyncComponent(() => import('./components/Default'));
const AsyncModal = asyncComponent(() => import('./components/Modal'));
const AsyncPaymentNotification = asyncComponent(() =>
  import('./components/PaymentNotification')
);

const App = ({
  isModalOpen,
  paymentSuccess,
  paymentCancelled,
  paymentError
}) => {
  return (
    <React.Fragment>
      <AsyncNavbar />
      <Switch>
        <Route exact path="/" component={AsyncProductList} />
        <Route
          path="/details/:id"
          render={({ match }) => <AsyncDetails id={match.params.id} />}
        />
        <Route path="/cart" component={AsyncCart} />
        <Route component={AsyncDefault} />
      </Switch>
      {isModalOpen ? (
        <AsyncModal />
      ) : paymentSuccess || paymentCancelled || paymentError ? (
        <AsyncPaymentNotification />
      ) : null}
    </React.Fragment>
  );
};

const mapDataToAppProps = data => {
  return {
    isModalOpen: data.isModalOpen,
    paymentSuccess: data.paymentSuccess,
    paymentCancelled: data.paymentCancelled,
    paymentError: data.paymentError
  };
};

export default withDataConsumer(mapDataToAppProps)(App);
