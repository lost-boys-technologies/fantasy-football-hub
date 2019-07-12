import React from 'react';
import { Typography } from '@material-ui/core';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Countdown from '../Countdown';

function Bet({ bet }) {
	const pending = bet.pending;
	let status = bet.status;

	if (pending) {
		status = <Countdown />;
	}

	return (
		<div id="BetCard">
			<ExpansionPanel className="bet-card">
				<ExpansionPanelSummary
					aria-controls="panel1a-content"
					id="panel1a-header"
					className="bet-details"
				>
					<Typography variant="inherit" component="span" className="bet-status">
						{status}
					</Typography>
					<div className="bettors-and-takers">
						<Typography variant="inherit" component="span" className="bettor">
							Bettor: {bet.bettor}
						</Typography>
						<Typography variant="inherit" component="span" className="takers">
							Taker(s): {bet.takers}
						</Typography>
					</div>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
					nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
					sunt in culpa qui officia deserunt mollitniam, quis nostrud exercitation ullamco
					laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
					Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
					deserunt mollitniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
					ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
					velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
					cupidatat non proident, sunt in culpa qui officia deserunt mollit
				</ExpansionPanelDetails>
			</ExpansionPanel>
		</div>
	);
}

export default Bet;
