const initState = {
    // Test Data (temporary)
    bets: [
        {id: 1, bettor: 'Evan', takers: ['Kenny', 'Sean']},
        {id: 2, bettor: 'Kyle', takers: ['Evan']},
        {id: 3, bettor: 'Evan', takers: ['Kenny', 'Sean', 'Simon', 'Kyle']},
    ]
};

const betReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_BET' : console.log('created bet', action.bet);
    }
    return state;
}

export default betReducer