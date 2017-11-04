import React from 'react';
import { ApolloProvider } from 'react-apollo';

import Main from './Main';
import client from './apollo';

export default () => (
  <ApolloProvider client={client}>
    <Main />
  </ApolloProvider>
);
