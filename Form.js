import React from 'react';
import DropdownMenu from 'react-native-dropdown-menu';

const Form = ({ children, handler }) => (
  <DropdownMenu
    style={{ flex: 1 }}
    bgColor="red"
    tintColor="white"
    selectItemColor="red"
    data={[['C', 'Java', 'JavaScript'], ['Python', 'Ruby'], ['Swift', 'Objective-C']]}
    maxHeight={410}
    handler={handler}
  >
    {children}
  </DropdownMenu>
);

export default Form;
