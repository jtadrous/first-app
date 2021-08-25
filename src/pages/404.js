//this page shows when a page is not found or there is an error
import React from 'react';
import { Link } from 'gatsby';

const Page404 = () => {
    return (
        <React.Fragment>
            <h1>Page Not Found</h1>
            <Link to='/'>Go Home</Link>
        </React.Fragment>
    );
};

export default Page404;