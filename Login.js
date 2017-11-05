import React from 'react';
import { Alert, Button,Image, StyleSheet, Text, TextInput, View } from 'react-native';

export default class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {text: 'Username'};
	}

  render() {
    return (
      	<Image style={styles.image} source ={{uri: 'https://i.imgur.com/AksfUFs.jpg'}}>
					<View style ={{flex:1}} />
					<Image style ={styles.icon} source = {{uri: 'https://i.imgur.com/eyMhdlj.png'}}>
					</Image>
					<View style = {{flex:4}}>
						<View style = {styles.usernameContainer}>
							<TextInput
							 	style={styles.usernameInput}
							 	onChangeText = {(text) => this.setState({text})}
							 	value={this.state.text}
							/>
						</View>
						<View style = {styles.passwordContainer}>
							<TextInput
							 	style={styles.usernameInput}
							 	onChangeText = {(text) => this.setState({text})}
							 	value={this.state.text}
							/>
						</View>
						<Button style={{flex:1}} onPress ={Alert.alert("what")} title="Submit" color="#ba9f78"/>
					</View>
				</Image>
    );
  }
}

const styles = StyleSheet.create({
	image: {
		flex:1,
		resizeMode: 'cover',
		opacity: .5,
	},
	icon: {
		flex:1,
		resizeMode: 'contain',
		opacity: 2,
	},
	text:{
		backgroundColor: 'transparent',
	},
	usernameInput:{
		justifyContent: 'center',
		fontSize: 14,
		color:'white',
	},
	usernameContainer:{
		flex: 1,
		justifyContent:'center',
		color:'white',
	},
	passwordContainer:{
		flex: 1,
		justifyContent: 'center',
	},
});
