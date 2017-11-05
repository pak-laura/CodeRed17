import React from 'react';
import styled from 'styled-components/native';
import { View, Text, TextInput } from 'react-native';
import Icon from '@expo/vector-icons/Entypo';

import Container from './components/Container';

const ThreeColumn = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const MenuItem = styled.TouchableOpacity`
  flex: 1;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
`;

const ListItem = styled.TouchableOpacity`
  padding-top: 5px;
  padding-bottom: 5px;
`;

const Row = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 12px;
`;

const IconRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Label = styled.Text`
  font-weight: bold;
  font-size: 18;
`;

const SelectorValue = styled.Text`font-size: 16;`;

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
  onChangeText,
}) => {
  const showChildren = !optionsData.length;
  const color = 'rgb(67, 73, 46)';
  return (
    <Container>
      <ThreeColumn>
        <MenuItem onPress={() => onSelect(1)}>
          <Row>
            <Label>Casing Size</Label>
          </Row>
          <IconRow>
            <SelectorValue>{size}</SelectorValue>
            <Icon
              name={currName !== 'size' || showChildren ? 'triangle-up' : 'triangle-down'}
              size={25}
              color={color}
            />
          </IconRow>
        </MenuItem>
        <MenuItem onPress={() => onSelect(2)}>
          <Row>
            <Label>Weight</Label>
          </Row>
          <IconRow>
            <SelectorValue>{weight}</SelectorValue>
            <Icon
              name={currName !== 'weight' || showChildren ? 'triangle-up' : 'triangle-down'}
              size={25}
              color={color}
            />
          </IconRow>
        </MenuItem>
        <MenuItem onPress={() => onSelect(3)}>
          <Row>
            <Label>Grade</Label>
          </Row>
          <IconRow>
            <SelectorValue>{grade}</SelectorValue>
            <Icon
              name={currName !== 'grade' || showChildren ? 'triangle-up' : 'triangle-down'}
              size={25}
              color={color}
            />
          </IconRow>
        </MenuItem>
      </ThreeColumn>
      <TextInput
        name="length"
        keyboardType="numeric"
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'right',
          width: '100%',
          padding: 5,
          margin: 2,
        }}
        onChangeText={onChangeText}
        placeholder="Casing Length (feet)"
      />
      {showChildren ? (
        children
      ) : (
        <Options
          ItemSeparatorComponent={() => (
            <View
              style={{
                height: 1,
                backgroundColor: '#d3d3d3',
              }}
            />
          )}
          data={optionsData}
          renderItem={({ item }) => (
            <ListItem onPress={() => onListItemPressed(item)}>
              <Text style={{ paddingLeft: 20, fontSize: 25 }}>{item}</Text>
            </ListItem>
          )}
          keyExtractor={item => item}
        />
      )}
    </Container>
  );
};

export default Form;
