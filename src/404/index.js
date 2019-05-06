import React from 'react';
import './404.scss';

function NotFound() {
    return(
        <React.Fragment>
            <div className="not-found-container">
                <p>Not Found</p>
                <a href="/">Take me home!</a>
            </div>
        </React.Fragment>
    )
}

export default NotFound;