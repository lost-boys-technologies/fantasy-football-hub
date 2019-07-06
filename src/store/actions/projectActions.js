export const createBet = (bet) => {
    return (dispatch, getState) => {
        // Async call to DB
        dispatch({ type: 'CREATE_BET', bet})
    }
}