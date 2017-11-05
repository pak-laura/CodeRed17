import React from 'react';
import { ApolloProvider } from 'react-apollo';

import Routes from './Routes';
import client from './apollo';

export default () => (
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>
);
