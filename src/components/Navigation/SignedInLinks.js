import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
    return (
        <ul className="">
            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/members">Members</NavLink></li>
            <li><NavLink to="/constitution">Constitution</NavLink></li>
            <li><NavLink to="/rules">Rules</NavLink></li>
            <li><NavLink to="/bets">Bets</NavLink></li>
            <li><NavLink to="/signout">Sign Out</NavLink></li>
            <li><NavLink to="/profile">KH</NavLink></li>
        </ul>
    )
}

export default SignedInLinks;