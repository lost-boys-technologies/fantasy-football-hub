const initState = {
	// Test Data (temporary)
	// TODO: Figure out better status value name
	bets: [
		{
			id: 1,
			startDate: 'this',
			status: 'IN PROGRESS',
			pending: true,
			bettor: 'Evan',
			takers: ['Kenny', 'Sean'],
		},
		{
			id: 2,
			startDate: 'this',
			status: 'COMPLETE',
			pending: false,
			bettor: 'Kyle',
			takers: ['Evan'],
		},
		{
			id: 3,
			startDate: 'this',
			status: 'IN PROGRESS',
			pending: false,
			bettor: 'Evan',
			takers: ['Kenny', 'Sean', 'Simon', 'Kyle'],
		},
		{
			id: 4,
			startDate: 'this',
			status: 'IN PROGRESS',
			pending: false,
			bettor: 'Evan',
			takers: ['Kenny', 'Simon', 'Kyle'],
		},
		{
			id: 5,
			startDate: 'this',
			status: 'IN PROGRESS',
			pending: false,
			bettor: 'Evan',
			takers: ['Kenny', 'Sean', 'Simon'],
		},
		{
			id: 6,
			startDate: 'this',
			status: 'IN PROGRESS',
			pending: true,
			bettor: 'Kenny',
			takers: ['Sean', 'Simon', 'Kyle'],
		},
	],
};

const betReducer = (state = initState, action) => {
	switch (action.type) {
		case 'CREATE_BET':
			console.log('created bet', action.bet);
	}
	return state;
};

export default betReducer;
