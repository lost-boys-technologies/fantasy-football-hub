import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import BetsList from './BetsList';
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
					asdfasdf
					<DialogActions onClick={this.toggleDialog}>Cancel</DialogActions>
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
