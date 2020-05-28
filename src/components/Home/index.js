import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

function Home() {
	return (
		<div>
			<div className="spa-container">
				<h2>Welcome to Your Fantasy Football Hub</h2>
			</div>
		</div>
	);
}

const mapStateToProps = state => {
	console.log('home', state);
	return {
		bets: state.bet.bets,
	};
};

export default compose(
	connect(mapStateToProps),
	firestoreConnect([{ collection: 'bets' }]),
)(Home);
