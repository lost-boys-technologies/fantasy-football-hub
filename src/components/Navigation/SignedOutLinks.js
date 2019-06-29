import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
    return (
        <ul className="nav-link-container">
            <li><NavLink className="nav-link" to="/">Sign Up</NavLink></li>
            <li><NavLink className="nav-link" to="/">Sign In</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks;