import React from 'react';
import { Typography } from '@material-ui/core';
import Accordion from '../Accordion';

function Bet({ bet }) {
	return (
		<div className="bet-card">
			<div className="bet-status">{bet.status}</div>
			<div className="bet-details">
				<Typography variant="inherit" component="span" className="bettor">
					Bettor: {bet.bettor}
				</Typography>
				<Typography variant="inherit" component="span" className="takers">
					Taker(s): {bet.takers}
				</Typography>
				<Accordion />
			</div>
		</div>
	);
}

export default Bet;
