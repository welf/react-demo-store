import React from 'react';
import Spinner from './Spinner';

const asyncComponent = importComponent => {
  return class extends React.Component {
    state = {
      component: null
    };

    componentDidMount = async () => {
      const { default: component } = await importComponent();
      this.setState({ component });
    };

    render() {
      const Component = this.state.component;

      return Component ? <Component {...this.props} /> : <Spinner />;
    }
  };
};

export default asyncComponent;
