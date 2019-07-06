import React from 'react'
import { Typography } from '@material-ui/core';
import Bet from './Bet';

const BetsList = ({ bets }) => {
    const pendingBets = [], establishedBets = [];

    bets.forEach((bet) => {
        if (bet.pending) {
            pendingBets.push(<Bet bet={bet} key={bet.id} />)
        } else {
            establishedBets.push(<Bet bet={bet} key={bet.id} />)
        }
    })

    return (
        <div className="bets-list-container">
            <div className="pending-bets">
                <Typography variant="inherit" component="h4">Pending Bets</Typography>
                {pendingBets}
            </div>
            <div className="established-bets">
                <Typography variant="inherit" component="h4">Established Bets</Typography>'
                {establishedBets}
            </div>
        </div>
    )
}

export default BetsList
