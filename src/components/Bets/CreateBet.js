import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { createBet } from '../../store/actions/betActions';

export class CreateBet extends Component {
	state = {
		title: '',
		content: '',
	};

	handleChange = e => {
		this.setState({ [e.target.id]: e.target.value });
		//! grabs the value from the id from the below JSX
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.createProject(this.state);
	};

	render() {
		const toggleDialog = this.props.toggleDialog;

		return (
			<React.Fragment>
				<DialogTitle>Create Your Bet</DialogTitle>
				<DialogContent>
					<form classname="create-bet-form" onSubmit={this.handleSubmit}>
						<TextField
							id="filled-name"
							label="Name"
							className="bet-title"
							onChange={this.handleChange}
							margin="normal"
							variant="filled"
						/>
					</form>
				</DialogContent>
				<DialogActions>
					<Button onClick={toggleDialog} color="primary">
						Save
					</Button>
					<Button onClick={toggleDialog} color="secondary">
						Cancel
					</Button>
				</DialogActions>
			</React.Fragment>
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
