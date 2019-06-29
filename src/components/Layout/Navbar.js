import React from 'react';
import { Link } from 'react-router-dom';

import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const NavBar = () => {
    return (
        <nav>
            <div>
                <Link to ='/' className="league-logo"></Link>
                <SignedInLinks />
                {/* <SignedOutLinks /> */}
            </div>
        </nav>
    )
}

export default NavBar;