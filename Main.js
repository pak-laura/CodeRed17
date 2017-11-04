import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Container from './components/Container';
import Form from './Form';

export default class Main extends React.Component {
  state = {
    size: 4.5,
    weight: 9.5,
    grade: 110000,
  };

  handler = (name, value) => {
    console.log(name);
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { size, weight, grade } = this.state;
    return (
      <Container>
        <Form handler={this.handler}>
          <Text>{size}</Text>
          <Text>{weight}</Text>
          <Text>{grade}</Text>
        </Form>
      </Container>
    );
  }
}
