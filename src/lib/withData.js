import React from 'react';
import { data } from './data';

const withData = (Component) => {
  const WithData = props => <Component data={data} {...props} />;
  return WithData;
};

export default withData;
