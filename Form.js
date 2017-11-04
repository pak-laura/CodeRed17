import React from 'react';
import DropdownMenu from 'react-native-dropdown-menu';

import data from './data';

const mapper = ['size', 'weight', 'grade'];

const Form = ({ children, handler }) => (
  <DropdownMenu
    style={{ flex: 1 }}
    bgColor="red"
    tintColor="white"
    selectItemColor="red"
    data={data}
    maxHeight={800}
    handler={(selection, row) => handler(mapper[selection], data[selection][row])}
  >
    {children}
  </DropdownMenu>
);

export default Form;
