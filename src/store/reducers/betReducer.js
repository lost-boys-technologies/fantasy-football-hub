const initState = {
    // Test Data (temporary)
    bets: [
        {id: 1, bettor: 'Evan', takers: 'Kenny',},
        {id: 2, bettor: 'Kyle', takers: 'Evan'},
        {id: 3, bettor: 'Evan', takers: 'Sean'},
    ]
};

const betReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_BET' : console.log('created bet', action.bet);
    }
    return state;
}

export default betReducer;