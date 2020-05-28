import React, { Component } from 'react';
import { Box } from '@material-ui/core';

class Countdown extends Component {
	constructor({ bet }) {
		super(bet);
		// TODO need to change bet.startDate to bet.createdAt.seconds (per firebase DB)
		// TODO update the firebase to include 1) Bet Term
		const secondsInADay = 86400; //! Might not need this because createdAt looks like it will handle it
		const convertedBetTerm = secondsInADay * bet.betTerm;
		const calculatedStartDate = bet.startDate + convertedBetTerm;
		const timeSince = new Date().getTime() / 1000;
		const betTermInSeconds = calculatedStartDate - timeSince;

		this.state = {
			time: {},
			seconds: betTermInSeconds,
			startDate: bet.startDate,
		};

		this.timer = 0;
		this.startTimer = this.startTimer.bind(this);
		this.countDown = this.countDown.bind(this);
	}

	secondsToTime(secs) {
		let hours = Math.floor(secs / (60 * 60));

		let divisor_for_minutes = secs % (60 * 60);
		let minutes = Math.floor(divisor_for_minutes / 60);

		let divisor_for_seconds = divisor_for_minutes % 60;
		let seconds = Math.ceil(divisor_for_seconds);

		let obj = {
			h: hours,
			m: minutes,
			s: seconds,
		};
		return obj;
	}

	componentDidMount() {
		let timeLeftVar = this.secondsToTime(this.state.seconds);
		this.setState({ time: timeLeftVar });
		this.startTimer();
	}

	startTimer() {
		if (this.timer === 0 && this.state.seconds > 0) {
			this.timer = setInterval(this.countDown, 1000);
		}
	}

	countDown() {
		let seconds = this.state.seconds - 1;
		this.setState({
			time: this.secondsToTime(seconds),
			seconds: seconds,
		});

		if (seconds === 0) {
			clearInterval(this.timer);
			// TODO Do check for how many takers there are and post to to DB that pending is false
		}
	}

	render() {
		return (
			<div className="countdown">
				<Box variant="inherit" component="span" fontWeight="fontWeightBold">
					Time Left
				</Box>
				{this.state.time.h}h {this.state.time.m}m {this.state.time.s}s
			</div>
		);
	}
}

export default Countdown;
