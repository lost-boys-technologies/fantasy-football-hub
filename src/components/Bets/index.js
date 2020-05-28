import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Dialog from 'react-bootstrap/Modal'; //! Rename to Modal

import BetsList from './BetsList';
import CreateBet from './CreateBet';
import './Bets.scss';

class Bets extends Component {
	constructor(props) {
		super(props);

		this.state = {
			dialogOpen: false, //! switch to true for development
		};
	}

	toggleDialog = () => {
		this.setState({ dialogOpen: !this.state.dialogOpen });
	};

	render() {
		const { bets } = this.props;

		return (
			<div className='bets-container'>
				<Button
					onClick={this.toggleDialog}
					variant='outlined'
					color='default'
					className='create-bet-btn'
				>
					<i class='fas fa-plus'></i>
					Create Bet
				</Button>
				<Dialog open={this.state.dialogOpen} onClose={this.toggleDialog}>
					<CreateBet toggleDialog={this.toggleDialog} />
				</Dialog>
				<BetsList bets={bets} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		bets: state.bet.bets,
	};
};

export default connect(mapStateToProps)(Bets);
