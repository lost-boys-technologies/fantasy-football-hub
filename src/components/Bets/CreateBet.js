import React, { Component } from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { createBet } from '../../store/actions/betActions';

export class CreateBet extends Component {
	state = {
		// TODO Need to see who is logged in for `bettor`
		bettor: 'Kenny',
		betType: '',
		betDetails: '',
		betTerm: null,
		takers: [],
	};

	handleChange = e => {
		console.log('handle change evt', e);
		this.setState({ [e.target.id]: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.createBet(this.state);
	};

	render() {
		const toggleDialog = this.props.toggleDialog;

		const types = [
			{ value: 'cash', label: 'Cash Bet' },
			{ value: 'meal', label: 'Meal Bet' },
			{ value: 'water', label: 'Water Bet' },
			{ value: 'other', label: 'Other (No Cash)' },
		];

		/**
		 * // BetTitle
		 * // betSummary
		 * // betTerm
		 * // status <-- Part of bet actions
		 * // pending <-- Part of bet actions
		 * // bettor
		 * takers
		 * bet amounts
		 *
		 */

		// TODO Update to new component
		return (
			<div className="create-bet-container">
				<DialogTitle>Create Your Bet</DialogTitle>
				<DialogContent>
					<form onSubmit={this.handleSubmit}>
						<TextField
							disabled
							id="bettor"
							label="Bettor"
							defaultValue={this.state.bettor}
							className="input-field bettor"
							margin="dense"
							fullwidth
							variant="outlined"
						/>
						{/* // TODO this stupid select option doesn't work and I can't figure it out to save my life saving for MVP 2 */}
						<TextField
							id="betType"
							// select
							label="Select Bet Type"
							className="input-field bet-type"
							margin="dense"
							variant="outlined"
							onChange={this.handleChange}
						>
							{/* {types.map(option => (
								<MenuItem key={option.value} value={option.value}>
									{option.label}
								</MenuItem>
							))} */}
						</TextField>
						<TextField
							id="betDetails"
							label="Bet Details"
							multiline
							placeholder="Describe your bet"
							className="input-field bet-details"
							onChange={this.handleChange}
							margin="dense"
							variant="outlined"
							multiline
							rowsMax="4"
						/>
						<TextField
							id="betTerm"
							label="Term"
							onChange={this.handleChange}
							type="number"
							className="input-field bet-term"
							inputProps={{ min: '1', max: '5', step: '1' }}
							margin="dense"
							fullWidth
							variant="outlined"
						/>
						<TextField id="betTakers" label="" />
						<div className="input-field">
							<button onClick={toggleDialog}>Create</button>
						</div>
					</form>
				</DialogContent>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		createBet: bet => dispatch(createBet(bet)),
	};
};

export default connect(
	null,
	mapDispatchToProps,
)(CreateBet);
