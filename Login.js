import React from 'react';
import { Text, TouchableOpacity, Image, StyleSheet, TextInput, View } from 'react-native';

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  icon: {
    flex: 1,
    width: 120,
    height: 120,
  },
  text: {
    backgroundColor: 'transparent',
  },
  usernameInput: {
    justifyContent: 'center',
    fontSize: 14,
    color: 'white',
    padding: 5,
  },
  usernameContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  passwordContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  submitContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default ({ history }) => (
  <Image style={styles.image} source={{ uri: 'https://i.imgur.com/tEr5InH.png' }}>
    <View style={{ flex: 1 }} />
    <View
      style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Image style={styles.icon} source={{ uri: 'https://i.imgur.com/MUuyMdq.png' }} />
    </View>
    <View style={{ flex: 4, margin: 10 }}>
      <View style={styles.usernameContainer}>
        <TextInput
          placeholderTextColor="white"
          underlineColorAndroid="white"
          placeholder="Email"
          style={styles.usernameInput}
        />
      </View>
      <View style={styles.passwordContainer}>
        <TextInput
          placeholderTextColor="white"
          underlineColorAndroid="white"
          placeholder="Password"
          style={styles.usernameInput}
          secureTextEntry
        />
      </View>
      <View style={styles.submitContainer}>
        <TouchableOpacity
          style={{
            height: 50,
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#ba9f78',
          }}
          onPress={() => history.push('/query')}
        >
          <Text style={{ color: '#fff' }}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Image>
);
