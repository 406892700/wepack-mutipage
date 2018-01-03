import React, { Component } from 'react';
// import './index.scss';
import { connect } from 'react-redux';
import Nav from '../../components/Nav';

class About extends Component {
    constructor() {
        super();
    }

    render() {
        let { about } = this.props;
        
        return (
            <div>
                <Nav/>
                { JSON.stringify(about) }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps)(About);
