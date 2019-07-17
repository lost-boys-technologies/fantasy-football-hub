export const createBet = bet => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		//! Async call to DB
		dispatch({ type: 'CREATE_BET', bet });
	};
};
