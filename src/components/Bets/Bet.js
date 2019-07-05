import React from 'react'
import { Typography } from '@material-ui/core';

function Bet() {
    return (
        <div className="bet-card">
            <div className="bet-status">
                Pending
            </div>
            <div className="bet-details">
                <Typography variant="inherit" component="span" className="bettor">Bettor</Typography>
                <Typography variant="inherit" component="span" className="takers">Taker(s)</Typography>
            </div>
        </div>
    )
}

export default Bet
