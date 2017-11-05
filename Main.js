import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Form from './Form';
import FetchCasing from './FetchCasing';
import { sizes, weights, grades } from './data';
import calculate from './calculate';
import MyList from './MyList';

export default class Main extends React.Component {
  state = {
    size: 4.5,
    weight: 9.5,
    grade: 110000,
    length: 1,
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
    if (this.state.currName !== '') {
      this.setState({
        optionsData: [],
        currName: '',
      });
    } else if (i === 1) {
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

  onChangeText = (length) => {
    this.setState({
      length,
    });
  };

  render() {
    const {
      size, weight, grade, length,
    } = this.state;
    return (
      <Form
        {...this.state}
        onSelect={this.handleSelect}
        onListItemPressed={this.handleListItemPressed}
        onChangeText={this.onChangeText}
      >
        <FetchCasing size={size} weight={weight}>
          {({ nominalId, driftId }) => (
            <MyList items={calculate(size, weight, grade, nominalId, driftId, length)} />
          )}
        </FetchCasing>
      </Form>
    );
  }
}
