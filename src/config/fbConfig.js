import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
	apiKey: 'AIzaSyBOxvbDSQVJgEw4YvTqPOtWd26c6v5yjxc',
	authDomain: 'fantasy-football-hub.firebaseapp.com',
	databaseURL: 'https://fantasy-football-hub.firebaseio.com',
	projectId: 'fantasy-football-hub',
	storageBucket: '',
	messagingSenderId: '721285827222',
	appId: '1:721285827222:web:780ef5b478580772',
};
firebase.initializeApp(firebaseConfig);
firebase.firestore();
//! OLD WAY: firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
