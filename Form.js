import React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';
import Container from './components/Container';

const mapper = ['size', 'weight', 'grade'];

const ThreeColumn = styled.View`
  display: flex;
  flex-direction: row;
`;

const MenuItem = styled.TouchableOpacity`
  flex: 1;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const ListItem = styled.TouchableOpacity`
  padding-top: 5px;
  padding-bottom: 5px;
`;

const Options = styled.FlatList``;

const Form = ({
  children, size, weight, grade, onSelect, optionsData, onListItemPressed,
}) => (
  <Container>
    <ThreeColumn>
      <MenuItem onPress={() => onSelect(1)}>
        <Text>{size}</Text>
      </MenuItem>
      <MenuItem onPress={() => onSelect(2)}>
        <Text>{weight}</Text>
      </MenuItem>
      <MenuItem onPress={() => onSelect(3)}>
        <Text>{grade}</Text>
      </MenuItem>
    </ThreeColumn>
    {!optionsData.length ? (
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

export default Form;
