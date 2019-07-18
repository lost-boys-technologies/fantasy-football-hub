import authReducer from './authReducer';
import betReducer from './betReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
	auth: authReducer,
	bet: betReducer,
	firestore: firestoreReducer,
});

export default rootReducer;
