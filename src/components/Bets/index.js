import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

import BetsList from './BetsList';
import CreateBet from './CreateBet';
import './Bets.scss';

class Bets extends Component {
	constructor(props) {
		super(props);

		this.state = {
			dialogOpen: false,
		};
	}

	toggleDialog = () => {
		this.setState({ dialogOpen: !this.state.dialogOpen });
	};

	render() {
		const { bets } = this.props;

		return (
			<div className="bets-container">
				<Button
					onClick={this.toggleDialog}
					variant="outlined"
					color="default"
					className="create-bet-btn"
				>
					<AddIcon className="add-icon" />
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

export default compose(
	connect(mapStateToProps),
	firestoreConnect([{ collection: 'bets' }]),
)(Bets);
