import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const FetchCasing = ({ children, data: { loading, getCasing, ...others } }) =>
  (loading ? null : children(getCasing));

const getCasingQuery = gql`
  query($size: Float!, $weight: Float!) {
    getCasing(size: $size, weight: $weight) {
      nominalId
      driftId
    }
  }
`;

export default graphql(getCasingQuery, {
  variables: props => props,
})(FetchCasing);
