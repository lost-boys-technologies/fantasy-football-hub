export const createBet = bet => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		//! Async call to DB
		const firestore = getFirestore();
		firestore
			.collection('bets')
			.add({
				...bet,
				authorId: 12345,
				bettor: 'Kyle',
				createdAt: new Date(),
				details: 'cOwBOys wIlL haVE a bETteR sEAsOn thAn tEh 49eRs!',
				pending: true,
				status: 'In Progress',
				takers: ['Kenny', 'Simon', 'Sean', 'Evan'],
				term: 2,
				title: 'zEKe iS GawD!',
			})
			.then(() => {
				dispatch({ type: 'CREATE_BET', bet });
			})
			.catch(err => {
				dispatch({ type: 'CREATE_BET_ERROR', err });
			});
	};
};
