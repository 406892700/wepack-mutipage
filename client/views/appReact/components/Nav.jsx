import React, { Component } from 'react';
import { Link } from 'react-router';

class Nav extends Component {
    render() {
        return (
            <div>
                <Link to="/">index</Link>&nbsp;&nbsp;&nbsp;
                <Link to="/about">about</Link>
            </div>
        );
    }
}

export default Nav;
