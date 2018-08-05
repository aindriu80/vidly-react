import React, { Component } from 'react';

class NavBAr extends Component {
    state = {}
    render() {
        return (<nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar
            Navbar <span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span>
            </a>

        </nav>);
    }
}

export default NavBAr;