import React from 'react';
import { DataConsumer } from '../context';

const withDataConsumer = mapDataToProps => Component => {
  return props => {
    return (
      <DataConsumer>
        {data => {
          const dataProps = mapDataToProps(data);
          return <Component {...props} {...dataProps} />;
        }}
      </DataConsumer>
    );
  };
};

export default withDataConsumer;
