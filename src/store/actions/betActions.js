export const createBet = bet => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const firestore = getFirestore();
		firestore
			.collection('bets')
			.add({
				...bet,
				authorId: 12345,
				createdAt: new Date(),
				pending: true,
				status: 'In Progress',
			})
			.then(() => {
				dispatch({ type: 'CREATE_BET', bet });
			})
			.catch(err => {
				dispatch({ type: 'CREATE_BET_ERROR', err });
			});
	};
};
