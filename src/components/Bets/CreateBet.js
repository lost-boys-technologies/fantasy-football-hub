import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

export default function CreateBet(props) {
	const [values, setValues] = useState({});

	const toggleDialog = props.toggleDialog;

	const handleChange = name => event => {
		setValues({ ...values, [name]: event.target.value });
	};

	return (
		<React.Fragment>
			<DialogTitle>Create Your Bet</DialogTitle>
			<DialogContent>
				<form classname="create-bet-form" autoComplete="on">
					<TextField
						id="filled-name"
						label="Name"
						className="bet-title"
						value={values.name}
						onChange={handleChange('name')}
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
