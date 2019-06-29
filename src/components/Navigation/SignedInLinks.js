import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
    return (
        <ul className="">
            <li><NavLink to="/">About Us</NavLink></li>
            <li><NavLink to="/">Members</NavLink></li>
            <li><NavLink to="/">Constitution</NavLink></li>
            <li><NavLink to="/">Rules</NavLink></li>
            <li><NavLink to="/">Bets</NavLink></li>
            <li><NavLink to="/">Sign Out</NavLink></li>
            <li><NavLink to="/">KH</NavLink></li>
        </ul>
    )
}

export default SignedInLinks;