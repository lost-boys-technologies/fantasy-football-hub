import React from 'react'
import { Typography } from '@material-ui/core';
import Bet from './Bet';

function BetsList() {
    return (
        // TODO: Dynamically handle the the className between "pending-bet" and "established-bet"
        // that will put the the bet card either on the left or the right of the bets-container
        <React.Fragment>
            <div className="pending-bets">
                <Typography variant="inherit" component="h4">Pending Bets</Typography>
            </div>
            <div className="established-bets">
                <Typography variant="inherit" component="h4">Established Bets</Typography>
                <Bet />
            </div>
        </React.Fragment>
    )
}

export default BetsList
