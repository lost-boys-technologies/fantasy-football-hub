import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import './index.scss';
import './App.scss';
import App from './App';
import About from './About';
import Members from './Members';
import Constitution from './Constitution';
import Rules from './Rules';
import Bets from './Bets';
import NotFound from './404';
import * as serviceWorker from './serviceWorker';

const routing = (
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
        <Switch>
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

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
