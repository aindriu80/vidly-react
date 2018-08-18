import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

// Stateless Functional Component
const NavBar = ({ totalCounters }) => {
    // console.log('Navbar - Rendered');

    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">Vidly
                <span className="badge badge-pill badge-secondary">
                    {totalCounters}
                </span>
            </a>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink className="nav-item nav-link" to="/movies">Movies</NavLink>
                    <NavLink className="nav-item nav-link" to="/customers">Customers</NavLink>
                    <NavLink className="nav-item nav-link" to="/rentals">Rentals</NavLink>
                </div>
            </div>


        </nav>
    );
};

export default NavBar;