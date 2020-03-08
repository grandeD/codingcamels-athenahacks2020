var environments = {
	staging: {
		FIREBASE_API_KEY: 'AIzaSyAm9o7qlUWcuxhoNPbsrS6SM-r3Csm9n4w',
		FIREBASE_AUTH_DOMAIN: 'i-con-recycle.firebaseapp.com',
		FIREBASE_DATABASE_URL: 'https://i-con-recycle.firebaseio.com',
		FIREBASE_PROJECT_ID: 'i-con-recycle',
		FIREBASE_STORAGE_BUCKET: 'i-con-recycle.appspot.com',
		FIREBASE_MESSAGING_SENDER_ID: '617611080551',
		GOOGLE_CLOUD_VISION_API_KEY: 'AIzaSyCBmaPNdm2pd1_Oyy7ZXBS7toQKPQ3OLgw'
	},
	production: {
		// Warning: This file still gets included in your native binary and is not a secure way to store secrets if you build for the app stores. Details: https://github.com/expo/expo/issues/83
	}
};

function getReleaseChannel() {
	let releaseChannel = Expo.Constants.manifest.releaseChannel;
	if (releaseChannel === undefined) {
		return 'staging';
	} else if (releaseChannel === 'staging') {
		return 'staging';
	} else {
		return 'staging';
	}
}
function getEnvironment(env) {
	console.log('Release Channel: ', getReleaseChannel());
	return environments[env];
}
var Environment = getEnvironment(getReleaseChannel());
export default Environment;