import React, { Component } from "react";
import { Button, Text, View, Dimensions, TouchableOpacity, StyleSheet } from "react-native";
import Modal from "react-native-modal";
 
export default class ModalTester extends Component {
	state = {
		isModalVisible: false
	};

	toggleModal = () => {
		this.setState({ isModalVisible: !this.state.isModalVisible });
	};

	render() {
		return (
			<View style={{ flex: 1 }}>
				<View style={styles.container}>
					<Button title="Show modal" onPress={this.toggleModal} />
					<Modal isVisible={this.state.isModalVisible} style={styles.modal_container}>

					<View style={styles.modal_title}>
						<Text style={styles.title_format}>Is this the right icon?</Text>
					</View>

					<Text style={{textAlign:'center'}}>image</Text>
					<Text style={{textAlign:'center'}}>uhhhh</Text>

					<View style={styles.button_row}>
						<View style={{flexDirection:'row'}}>
							<TouchableOpacity style={styles.no_button} onPress={this.toggleModal}>
								<Text style={styles.no_format}>No</Text>
							</TouchableOpacity>
							
							<TouchableOpacity style={styles.yes_button} onPress={this.toggleModal}>
								<Text style={styles.yes_format}>Yes</Text>
							</TouchableOpacity>
						</View>
					</View>

					</Modal>
				</View>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	container:
	{
		flex: 1, 
		flexDirection: 'column', 
		justifyContent: 'center', 
		alignItems: 'center',
	},

	modal_container:
	{
		marginTop:100,
		backgroundColor:'white', 
		maxHeight:Dimensions.get('window').height*0.65, 
		borderRadius:20
	},

	modal_title:
	{ 
		flex: 1,
		justifyContent:'center',
		position:'absolute',
		top:60, 
		marginLeft:70
	},

	title_format:
	{
		textAlign:'center', 
		fontWeight: 'bold', 
		fontSize:20
	},

	button_row:
	{ 
		flex: 1,
		justifyContent:'center',
		position:'absolute',
		bottom:60
	},

	no_button:
	{
		backgroundColor:'white',
		width:'40%', 
		borderColor:'#41A56C', 
		borderWidth: 1,
		borderRadius: 30, 
		marginLeft: 35,
		marginRight:5
	},

	no_format:
	{
		color:'#41A56C',
		textAlign:'center',
		padding:10
	},

	yes_button:
	{
		backgroundColor:'#41A56C',
		width:'40%', 
		borderRadius: 30, 
		marginLeft: 5
	},

	yes_format:
	{
		color:'white',
		textAlign:'center',
		padding:10
	}

});