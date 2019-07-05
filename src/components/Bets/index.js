import React, { useState }from 'react';
import Typography from '@material-ui/core/Typography';
import BetsList from './BetsList';
import Bet from './Bet';
import './Bets.scss';

const status = {
  pend: 'PENDING',
  done: 'COMPLETE',
}

function Bets() {
  return (
    <div className="bets-container">
      <BetsList />
    </div>
  )
}

export default Bets;
