import React from 'react';
import { Link } from 'react-router-dom';

import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

import './Navigation.scss';

const Navbar = () => {
    return (
        <nav className="nav-link-container">
                <Link to="/" className="nav-link group-name">Running Backs of Scotland</Link>
            <div className="links-container">
                <SignedInLinks />
                {/* <SignedOutLinks /> */}
            </div>
        </nav>
    )
}

export default Navbar;
