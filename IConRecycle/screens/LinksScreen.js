import React, { Component } from "react";
import { Button, Text, View, Dimensions, TouchableOpacity, StyleSheet, Image } from "react-native";
import Modal from "react-native-modal";
 
export default class LinkScreen extends Component {
	constructor() {
		super();
		//Setting up global variable
		global.MyVar = "Plastic #1 - PETE or PET (Polyethylene Terephthalate)";
	  }

	state = {
		isModalVisible: false
	};

	toggleModal = () => {
		this.setState({ isModalVisible: !this.state.isModalVisible });
	};

	changeScreen = () => {
		//Function to navigate to the next screen
		this.props.navigation.navigate('Info');
		this.toggleModal();
	  };

	render() {
		return (
			<View style={styles.background}>

                {/* <View style={styles.container}>
                    
                </View> */}

				<View style={styles.container}>
                    <View style={styles.image_container}>
                    <Image style={styles.image} source={require('../assets/images/recycle-loading.gif' )} />
                    </View>   
                    
                    <Text style={styles.loadingText}>L O A D I N G</Text>

					<Button title={global.MyVar} onPress={this.toggleModal} />
					<Modal isVisible={this.state.isModalVisible} style={styles.modal_container}>

						<View style={styles.modal_title}>
							<Text style={styles.title_format}>Is this the right icon?</Text>
						</View>

						{/* <Text style={{textAlign:'center'}}>image</Text>
						<Text style={{textAlign:'center'}}>uhhhh</Text> */}

						<View style={styles.symbol_container}>
						<Image style={styles.symbol} source={require('../assets/images/waste_electricals.png' )} />
						</View> 

						<View style={styles.button_row}>
							<View style={{flexDirection:'row'}}>
								<TouchableOpacity style={styles.no_button} onPress={this.toggleModal}>
									<Text style={styles.no_format}>No</Text>
								</TouchableOpacity>
								
								<TouchableOpacity style={styles.yes_button} onPress={this.changeScreen}>
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
    background:
    { 
        flex: 1,
        backgroundColor: '#81CEA2',
    },

	container:
	{
		flex: 1, 
		flexDirection: 'column', 
		justifyContent: 'center', 
		alignItems: 'center',
    },
	
	symbol_container:
	{
		// alignItems: 'center',
		position: 'absolute',
		flex: 1,
		margin: 35
		// justifyContent:'center',
	},

	symbol:
	{
		height:250, 
		width:250
	},

    image_container:
    {
        borderWidth: 5,
        borderColor: '#41A56C',
        borderRadius:80
    },

    image: {
        height: 150,
        width: 150,
      
    },

    loadingText:
    {
        textAlign:'center',
        color: 'white',
        fontSize: 25,
        padding: 10
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
		// justifyContent:'center',
		// position:'absolute',
		// top:60, 
		padding: 45
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
		position:'relative',
		alignItems: 'center',
		bottom:0,
		// padding: 20
	},

	no_button:
	{
		backgroundColor:'white',
		height: 50,
		width:'40%', 
		borderColor:'#41A56C', 
		borderWidth: 1,
		borderRadius: 30, 
		// marginLeft: 35,
		margin:5
	},

	no_format:
	{
		color:'#41A56C',
		textAlign:'center',
		padding:10,
		margin: 2,
		fontSize: 18
	},

	yes_button:
	{
		backgroundColor:'#41A56C',
		width:'40%', 
		borderRadius: 30, 
		margin: 5,
		
	},

	yes_format:
	{
		color:'white',
		textAlign:'center',
		padding:10,
		margin: 2,
		fontSize: 18
	}

});