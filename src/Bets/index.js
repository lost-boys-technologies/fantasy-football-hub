import React, { useState }from 'react';
import Typography from '@material-ui/core/Typography';
import './Bets.scss';

const status = {
  pend: 'PENDING',
  done: 'COMPLETE',
}

function Bets() {
  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen(!setOpen);
  }

  return (
    <div className="bets-container">
      <div className="pending-bets">
        <Typography variant="inherit" component="h4">Pending Bets</Typography>
      </div>
      <div className="established-bets">
      <Typography variant="inherit" component="h4">Established Bets</Typography>
      <div className="bet-card">
        <div className='bet-status'>
          {status.pend}
        </div>
        <div className="bet-details">
          <span className="bettor">Bettor</span>
          <span className="bettor-name">Lorem Ipsum</span>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Bets;
