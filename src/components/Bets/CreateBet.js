import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

export default function CreateBet(props) {
	const [values, setValues] = useState({});

	const toggleDialog = props.toggleDialog;

	const handleChange = name => event => {
		setValues({ ...values, [name]: event.target.value });
	};

	return (
		<React.Fragment>
			<p>Create Your Bet</p>
			<div>
				<form classname='create-bet-form' autoComplete='on'>
					<textarea
						id='filled-name'
						label='Name'
						className='bet-title'
						value={values.name}
						onChange={handleChange('name')}
						margin='normal'
						variant='filled'
					/>
				</form>
			</div>
			<div>
				<Button onClick={toggleDialog} color='primary'>
					Save
				</Button>
				<Button onClick={toggleDialog} color='secondary'>
					Cancel
				</Button>
			</div>
		</React.Fragment>
	);
}
