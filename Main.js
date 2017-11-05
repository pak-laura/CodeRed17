import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Form from './Form';
import FetchCasing from './FetchCasing';
import { sizes, weights, grades } from './data';

export default class Main extends React.Component {
  state = {
    size: 4.5,
    weight: 9.5,
    grade: 110000,
    optionsData: [],
    currName: '',
  };

  handleListItemPressed = (item) => {
    if (this.state.currName === 'size') {
      this.setState({
        [this.state.currName]: item,
        weight: weights[item][0],
        optionsData: [],
        currName: '',
      });
    } else {
      this.setState({
        [this.state.currName]: item,
        optionsData: [],
        currName: '',
      });
    }
  };

  handleSelect = (i) => {
    if (i === 1) {
      this.setState({
        optionsData: sizes,
        currName: 'size',
      });
    } else if (i === 2) {
      this.setState({
        optionsData: weights[this.state.size],
        currName: 'weight',
      });
    } else if (i === 3) {
      this.setState({
        optionsData: grades,
        currName: 'grade',
      });
    }
  };

  render() {
    const { size, weight, grade } = this.state;
    return (
      <Form
        {...this.state}
        onSelect={this.handleSelect}
        onListItemPressed={this.handleListItemPressed}
      >
        <FetchCasing size={size} weight={weight}>
          {casings => <Text>{JSON.stringify(casings)}</Text>}
        </FetchCasing>
        <Text>{size}</Text>
        <Text>{weight}</Text>
        <Text>{grade}</Text>
      </Form>
    );
  }
}
