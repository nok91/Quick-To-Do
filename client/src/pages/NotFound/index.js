import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage(props) {
    return (
        <div>
            <h2>404 - Not Found!</h2>
            <Link to="/"> Go Home </Link>
        </div>
    );
};

NotFoundPage.displayName = 'NotFoundPage';

export default NotFoundPage;