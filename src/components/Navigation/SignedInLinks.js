import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.scss';

const SignedInLinks = () => {
    return (
        <ul className="nav-link-container">
            <li><NavLink className="nav-link" to="/members">Members</NavLink></li>
            <li><NavLink className="nav-link" to="/constitution">Constitution</NavLink></li>
            <li><NavLink className="nav-link" to="/rules">Rules</NavLink></li>
            <li><NavLink className="nav-link" to="/bets">Bets</NavLink></li>
            <li><NavLink className="nav-link" to="/signout">Sign Out</NavLink></li>
            <li><NavLink className="nav-link" to="/profile">KH</NavLink></li>
        </ul>
    )
}

export default SignedInLinks;