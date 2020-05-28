import React from 'react';
import Bet from './Bet';

const BetsList = ({ bets }) => {
	const pendingBets = [],
		establishedBets = [];

	bets.forEach(bet => {
		if (bet.pending) {
			pendingBets.push(<Bet bet={bet} key={bet.id} />);
		} else {
			establishedBets.push(<Bet bet={bet} key={bet.id} />);
		}
	});

	return (
		<div className='bets-list-container'>
			<div className='pending-bets'>
				Pending Bets
				{pendingBets}
			</div>
			<div className='established-bets'>
				Established Bets
				{establishedBets}
			</div>
		</div>
	);
};

export default BetsList;
