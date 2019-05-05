import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home'
import About from './About';
import Members from './Members';
import Constitution from './Constitution';
import Rules from './Rules';
import Bets from './Bets';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="header-container">
        <Router>
          <div className="router-container">
            <ul className="nav-link-container">
              <li>
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li>
                <Link to="/about" className="nav-link">About Us</Link>
              </li>
              <li>
                <Link to="/members" className="nav-link">Members</Link>
              </li>
              <li>
                <Link to="/constitution" className="nav-link">Constitution</Link>
              </li>
              <li>
                <Link to="/rules" className="nav-link">Rules</Link>
              </li>
              <li>
                <Link to="/bets" className="nav-link">Bets</Link>
              </li>
            </ul>

            <hr />

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/members" component={Members} />
            <Route path="/constitution" component={Constitution} />
            <Route path="/rules" component={Rules} />
            <Route path="/bets" component={Bets} />

          </div>
        </Router>
      </header>

    </div>
  );
}

export default App;
