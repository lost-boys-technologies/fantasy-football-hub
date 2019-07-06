const initState = {
    // Test Data (temporary)
    bets: [
        {id: 1, status: 'PENDING', pending: true, bettor: 'Evan', takers: ['Kenny', 'Sean']},
        {id: 2, status: 'COMPLETE', pending: false, bettor: 'Kyle', takers: ['Evan']},
        {id: 3, status: 'PENDING', pending: false, bettor: 'Evan', takers: ['Kenny', 'Sean', 'Simon', 'Kyle']},
        {id: 4, status: 'PENDING', pending: true, bettor: 'Evan', takers: ['Kenny', 'Sean', 'Simon']},
    ]
};

const betReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_BET' : console.log('created bet', action.bet);
    }
    return state;
}

export default betReducer