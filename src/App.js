import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navigation/Navbar';
import SignIn from './components/Auth/SignIn.js';
import SignUp from './components/Auth/SignUp';
import Home from './components/Home';
import Members from './components/Members';
import Constitution from './components/Constitution';
import Rules from './components/Rules';
import Bets from './components/Bets';
// import BetDetails from './components/Bets/BetDetails';
import NotFound from './components/404';

import './App.scss';

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <Switch className="route-switch">
                    <Route exact path="/" component={Home} />
                    <Route path="/signin" component={SignIn} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/members" component={Members} />
                    <Route path="/constitution" component={Constitution} />
                    <Route path="/rules" component={Rules} />
                    <Route path="/bets" component={Bets} />
                    // Just messing with the below, I will need to rework
                    {/* <Route path="/betDetail/:id" component={BetDetails} /> */}
                    <Route component={NotFound}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App;
