import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

export default new ApolloClient({
  link: new HttpLink({ uri: 'https://3bf45949.ngrok.io/graphql' }),
  cache: new InMemoryCache(),
});
