import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Countdown from '../Countdown';

function Bet({ bet }) {
	const pending = bet.pending;
	let status = bet.status;

	if (pending) {
		status = <Countdown bet={bet} />;
	}

	return (
		<div id='BetCard'>
			<Accordion defaultActiveKey='0'>
				<Card>
					<Accordion.Toggle as={Card.Header} eventKey='0'>
						Click me!
					</Accordion.Toggle>
					<Accordion.Collapse eventKey='0'>
						<Card.Body>Hello! I'm the body</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<Accordion.Toggle as={Card.Header} eventKey='1'>
						Click me!
					</Accordion.Toggle>
					<Accordion.Collapse eventKey='1'>
						<Card.Body>Hello! I'm another body</Card.Body>
					</Accordion.Collapse>
				</Card>
			</Accordion>
			{/* <ExpansionPanel className='bet-card'>
				<ExpansionPanelSummary
					aria-controls='panel1a-content'
					id='panel1a-header'
					className='bet-details'
				>
					{status}
					<div className='bettors-and-takers'>
						{bet.bettor} is challenging {bet.takers}
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
			</ExpansionPanel> */}
		</div>
	);
}

export default Bet;
