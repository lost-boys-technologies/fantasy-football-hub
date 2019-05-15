import React from 'react';
import './Bets.scss';

function Bets() {
  return (
    <div className="spa-container">
        <h2>Bets</h2>
        <div className="bets-container">
          <div className="pending-bets">
            <h4>Pending Bets</h4>
          </div>
          <div className="established-bets">
          <h4>Established Bets</h4>
          <div className="bet-card">
            <div className="bet-status">
              pending
            </div>
            <div className="bet-details">
              name
            </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Bets;