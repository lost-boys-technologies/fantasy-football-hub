import React, { Component } from 'react';
import { Typography } from '@material-ui/core';

class Countdown extends Component {
	constructor(props) {
		super(props);

		// TODO: Format --> 3d 10h 30m

		this.state = {
			minutes: '',
			hours: '',
			days: '',
        };
        
        this.daysRemaining;
        this.hoursRemaining
        this.minutesRemaining;
        this.intervalHandle;
        this.handleChange = this.handleChange.bind(this);
        this.startCountDown = this.startCountDown.bind(this);
        this.tick = this.tick.bind(this);
	}

    handleChange(event) {
        this.setState({
            days: event.target.value,
        });
    }

    tick() {
        let day = Math.floor(this.hoursRemaining / 24);
        let hour = Math.floor(this.)
        let min = Math.floor(this.minutesRemaining / 60);
        let sec = this.minutesRemaining - (hour * 60);

        this.setState({
            days: 
        })
    }

	render() {
		return (
			<div>
				<Typography variant="inherit" component="h3">
					{this.state.days}d {this.state.hours}h {this.state.minutes}m
				</Typography>
			</div>
		);
	}
}

export default Countdown;
