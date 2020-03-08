import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	ActivityIndicator,
	Button,
	Share,
	FlatList,
	Clipboard,
  Image,
  Dimensions
} from 'react-native';
// import { ImagePicker, Permissions } from 'expo';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import uuid from 'uuid';

import Environment from '.././config/environment';
import firebase from '.././config/firebase';

import Modal from "react-native-modal";

function guidGenerator() {
  var S4 = function() {
     return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
  };
  return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

async function uploadImageAsync(uri) {
  console.log("URI:  " + uri);
	const blob = await new Promise((resolve, reject) => {
    console.log(firebase.database().app.name);
    
		const xhr = new XMLHttpRequest();
		xhr.onload = function() {
      resolve(xhr.response);
		};
		xhr.onerror = function(e) {

			console.log(e);
			reject(new TypeError('Network request failed'));
    };
    
  
		xhr.responseType = 'blob';
		xhr.open('GET', uri, true);
		xhr.send(null);
	});

  
	const ref = firebase
		.storage()
		.ref()
		.child(guidGenerator());
	const snapshot = await ref.put(blob);

	blob.close();
  
  return await snapshot.ref.getDownloadURL();
  
}



class HomeScreen extends Component {
	state = {
		image: null,
		uploading: false,
    googleResponse: null,
    isModalVisible: true
  };
  
	async componentDidMount() {
		await Permissions.askAsync(Permissions.CAMERA_ROLL);
		await Permissions.askAsync(Permissions.CAMERA);
	}

	organize = array => {
		return array.map(function(item, i) {
			return (
				<View key={i}>
					<Text>{item}</Text>
				</View>
			);
		});
	};

	_maybeRenderUploadingOverlay = () => {
		if (this.state.uploading) {
			return (
				<View
					style={[
						StyleSheet.absoluteFill,
						{
							backgroundColor: 'rgba(255,255,255,0.4)',
							alignItems: 'center',
							justifyContent: 'center'
						}
					]}
				>
					<ActivityIndicator color="#fff" animating size="large" />
				</View>
			);
		}
	};

	_maybeRenderImage = () => {
		let { image, googleResponse } = this.state;
		if (!image) {
			return;
		}

		return (
			<View
				style={{
					marginTop: 20,
					width: 250,
					borderRadius: 3,
					elevation: 2
				}}
			>
				<Button
					style={{ marginBottom: 10 }}
					onPress={() => this.submitToGoogle()}
					title="Analyze!"
				/>

				<View
					style={{
						borderTopRightRadius: 3,
						borderTopLeftRadius: 3,
						shadowColor: 'rgba(0,0,0,1)',
						shadowOpacity: 0.2,
						shadowOffset: { width: 4, height: 4 },
						shadowRadius: 5,
						overflow: 'hidden'
					}}
				>
					<Image source={{ uri: image }} style={{ width: 250, height: 250 }} />
				</View>
				<Text
					onPress={this._copyToClipboard}
					onLongPress={this._share}
					style={{ paddingVertical: 10, paddingHorizontal: 10 }}
				/>

				<Text>Raw JSON:</Text>

				{googleResponse && (
					<Text
						onPress={this._copyToClipboard}
						onLongPress={this._share}
						style={{ paddingVertical: 10, paddingHorizontal: 10 }}
					>
						{JSON.stringify(googleResponse.responses)}
					</Text>
				)}
			</View>
		);
	};

	_keyExtractor = (item, index) => item.description;

	_renderItem = item => {
		<Text>response: {JSON.stringify(item)}</Text>;
	};

	_share = () => {
		Share.share({
			message: JSON.stringify(this.state.googleResponse.responses),
			title: 'Check it out',
			url: this.state.image
		});
	};

	_copyToClipboard = () => {
		Clipboard.setString(this.state.image);
		alert('Copied to clipboard');
	};

	_takePhoto = async () => {
		let pickerResult = await ImagePicker.launchCameraAsync({
			allowsEditing: true,
			aspect: [4, 3]
		});

		this._handleImagePicked(pickerResult);
	};

	_pickImage = async () => {
		let pickerResult = await ImagePicker.launchImageLibraryAsync({
			allowsEditing: true,
			aspect: [4, 3]
		});

		this._handleImagePicked(pickerResult);
	};

	_handleImagePicked = async pickerResult => {
		try {
			this.setState({ uploading: true });

			if (!pickerResult.cancelled) {
				uploadUrl = await uploadImageAsync(pickerResult.uri);
				this.setState({ image: uploadUrl });
			}
		} catch (e) {
			console.log(e);
			alert('Upload failed, sorry :(');
		} finally {
			this.setState({ uploading: false });
		}
	};

	submitToGoogle = async () => {
		try {
			this.setState({ uploading: true });
			let { image } = this.state;
			let body = JSON.stringify({
				requests: [
					{
						features: [
							{ type: 'LABEL_DETECTION', maxResults: 10 },
							{ type: 'LANDMARK_DETECTION', maxResults: 5 },
							{ type: 'FACE_DETECTION', maxResults: 5 },
							{ type: 'LOGO_DETECTION', maxResults: 5 },
							{ type: 'TEXT_DETECTION', maxResults: 5 },
							{ type: 'DOCUMENT_TEXT_DETECTION', maxResults: 5 },
							{ type: 'SAFE_SEARCH_DETECTION', maxResults: 5 },
							{ type: 'IMAGE_PROPERTIES', maxResults: 5 },
							{ type: 'CROP_HINTS', maxResults: 5 },
							{ type: 'WEB_DETECTION', maxResults: 5 }
						],
						image: {
							source: {
								imageUri: image
							}
						}
					}
				]
			});
			let response = await fetch(
				'https://vision.googleapis.com/v1/images:annotate?key=' +
					Environment['GOOGLE_CLOUD_VISION_API_KEY'],
				{
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json'
					},
					method: 'POST',
					body: body
				}
			);
			let responseJson = await response.json();
			console.log(responseJson);
			this.setState({
				googleResponse: responseJson,
				uploading: false
			});
		} catch (error) {
			console.log(error);
		}
  };
  
  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

	render() {
    let { image } = this.state;
    let { isModalVisible } = this.state;


		return (
			<View style={styles.container}>
				<ScrollView contentContainerStyle={styles.contentContainer}>

        <Modal isVisible={isModalVisible} style={{backgroundColor:'white', marginTop: Dimensions.get('window').height / 4, maxHeight:Dimensions.get('window').height / 3}}>
          <View style={{ flex: 1 }}>
            <Text style={{marginTop: 10, marginBottom: 20, marginLeft: 20, fontSize: 30, fontWeight: 'bold'}}>Let&#39;s get started!</Text>
            <Text style={{marginBottom: 5, marginLeft: 20, fontSize: 20}}>1. Align the icon in the box.</Text>
            <Text style={{marginBottom: 5, marginLeft: 20, fontSize: 20}}>2. Take a picture and crop to your liking.</Text>
            <Text style={{marginBottom: 5, marginLeft: 20, fontSize: 20}}>3. View the icon&#39;s information!</Text>
            <Button title="OKAY" onPress={this.toggleModal} />
          </View>
        </Modal>

					<View style={styles.getStartedContainer}>
						{image ? null : (
							<Text style={styles.getStartedText}>Logo Detection App</Text>
						)}
					</View>

					<View style={styles.helpContainer}>
						<View style={{ margin: 20 }}>
							<Button
								onPress={this._pickImage}
								title="Pick an image from camera roll"
								color="#3b5998"
							/>
						</View>
						<Button
							onPress={this._takePhoto}
							title="Click a photo"
							color="#1985bc"
						/>

						{this.state.googleResponse && (
							<FlatList
								data={this.state.googleResponse.responses[0].logoAnnotations}
								extraData={this.state}
								keyExtractor={this._keyExtractor}
								renderItem={({ item }) => (
									<Text style={styles.logoText}>
										Logo Detected: {item.description}
									</Text>
								)}
							/>
						)}

						{this._maybeRenderImage()}
						{this._maybeRenderUploadingOverlay()}
					</View>
				</ScrollView>
			</View>
		);
	}
}

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ebebeb',
		paddingBottom: 10
	},
	developmentModeText: {
		marginBottom: 20,
		color: 'rgba(0,0,0,0.4)',
		fontSize: 14,
		lineHeight: 19,
		textAlign: 'center'
	},
	contentContainer: {
		paddingTop: 30
	},

	getStartedContainer: {
		alignItems: 'center',
		marginHorizontal: 50,
		marginVertical: 50
	},

	getStartedText: {
		fontSize: 24,
		color: '#000',
		fontWeight: 'bold',
		textAlign: 'center'
	},

	helpContainer: {
		marginTop: 15,
		alignItems: 'center'
	},

	logoText: {
		fontSize: 20,
		fontWeight: '600'
	}
});