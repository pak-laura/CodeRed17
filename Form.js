import React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';
import Icon from '@expo/vector-icons/Entypo';

import Container from './components/Container';

const ThreeColumn = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const MenuItem = styled.TouchableOpacity`
  flex: 1;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ListItem = styled.TouchableOpacity`
  padding-top: 5px;
  padding-bottom: 5px;
`;

const Options = styled.FlatList``;

const Form = ({
  currName,
  children,
  size,
  weight,
  grade,
  onSelect,
  optionsData,
  onListItemPressed,
}) => {
  const showChildren = !optionsData.length;
  const color = '#900';
  return (
    <Container>
      <ThreeColumn>
        <MenuItem onPress={() => onSelect(1)}>
          <Text>{size}</Text>
          <Icon
            name={currName !== 'size' || showChildren ? 'triangle-down' : 'triangle-up'}
            size={25}
            color={color}
          />
        </MenuItem>
        <MenuItem onPress={() => onSelect(2)}>
          <Text>{weight}</Text>
          <Icon
            name={currName !== 'weight' || showChildren ? 'triangle-down' : 'triangle-up'}
            size={25}
            color={color}
          />
        </MenuItem>
        <MenuItem onPress={() => onSelect(3)}>
          <Text>{grade}</Text>
          <Icon
            name={currName !== 'grade' || showChildren ? 'triangle-down' : 'triangle-up'}
            size={25}
            color={color}
          />
        </MenuItem>
      </ThreeColumn>
      {showChildren ? (
        children
      ) : (
        <Options
          data={optionsData}
          renderItem={({ item }) => (
            <ListItem onPress={() => onListItemPressed(item)}>
              <Text>{item}</Text>
            </ListItem>
          )}
          keyExtractor={item => item}
        />
      )}
    </Container>
  );
};

export default Form;
