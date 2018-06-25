import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <Link to="/" className="navbar-brand" ><i className="fa fa-sticky-note" aria-hidden="true"></i> G Notes</Link>
        </nav>
    );
};

export default Navbar;