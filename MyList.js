import React from 'react';
import { FlatList, Text, View } from 'react-native';
import Styles from './Styles';

export default ({ items }) => (
  <FlatList
    style={{ marginLeft: 10, marginRight: 10 }}
    data={items}
    renderItem={({ item }) => (
      <View style={Styles.item}>
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
