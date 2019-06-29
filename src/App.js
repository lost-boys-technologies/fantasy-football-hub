import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navigation/Navbar';
import Home from './components/Home';
import About from './components/About';
import Members from './components/Members';
import Constitution from './components/Constitution';
import Rules from './components/Rules';
import Bets from './components/Bets';
import NotFound from './components/404';

import './App.scss';

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar className="nav-bar" />
                <Switch className="route-switch">
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/members" component={Members} />
                    <Route path="/constitution" component={Constitution} />
                    <Route path="/rules" component={Rules} />
                    <Route path="/bets" component={Bets} />
                    <Route component={NotFound}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App;