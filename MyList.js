import React from 'react';
import { FlatList, Text, View } from 'react-native';
import Styles from './Styles';

export default ({ items }) => (
  <FlatList
    data={items}
    style={{ flex: 1, backgroundColor: '#FFFAF0' }}
    renderItem={({ item, index }) => (
      <View style={index % 2 !== 0 ? Styles.item : Styles.itemCool}>
        <View style={{ flex: 1 }}>
          <Text style={Styles.itemText}>{item.name}</Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
          <Text style={Styles.itemText}> {item.value}</Text>
        </View>
      </View>
    )}
    keyExtractor={item => item.name}
  />
);
