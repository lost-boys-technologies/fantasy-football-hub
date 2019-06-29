import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import './Links.scss';

import App from '../../App';
import About from '../About';
import Members from '../Members';
import Constitution from '../Constitution';
import Rules from '../Rules';
import Bets from '../Bets';
import NotFound from '../NotFound';

const SignedInLinks = () => {
    return (
        <Router>
        <div className="header-container">
            <div className="router-container">
                <ul className="nav-link-container">
                    <li>
                        <Link to='/' className="nav-link">Home</Link>
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
            </div>            
        </div>
        <Switch className="route-switch">
            <Route exact path="/" component={App} />
            <Route path="/about" component={About} />
            <Route path="/members" component={Members} />
            <Route path="/constitution" component={Constitution} />
            <Route path="/rules" component={Rules} />
            <Route path="/bets" component={Bets} />
            <Route component={NotFound}/>
        </Switch>
    </Router>
    )
}

export default SignedInLinks;