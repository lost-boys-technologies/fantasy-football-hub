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
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.createBet(this.state);
	};

	render() {
		const toggleDialog = this.props.toggleDialog;

		return (
			<React.Fragment>
				<DialogTitle>Create Your Bet</DialogTitle>
				<DialogContent>
					<form onSubmit={this.handleSubmit}>
						<h5 className="grey-text text-darken-3">Create Your Bet</h5>
						<div className="input-field">
							<label htmlFor="title">Title</label>
							<input type="text" id="title" onChange={this.handleChange} />
						</div>
						<div className="input-field">
							<label htmlFor="content">Content</label>
							<textarea id="content" onChange={this.handleChange} />
							<label htmlFor="theGuys">The Guys</label>
							<textarea id="theGuys" onChange={this.handleChange} />
						</div>
						<div className="input-field">
							<button onClick={toggleDialog}>Create</button>
						</div>
					</form>
				</DialogContent>
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
