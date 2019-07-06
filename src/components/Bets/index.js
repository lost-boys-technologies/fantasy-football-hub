import React, { Component }from 'react';
import { connect } from 'react-redux';
import BetsList from './BetsList';
import './Bets.scss';

class Bets extends Component {
  render() {
    const { bets } = this.props;

    return (
      <div className="bets-container">
        <BetsList bets={bets} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    bets: state.bet.bets
  }
}

export default connect(mapStateToProps)(Bets);
