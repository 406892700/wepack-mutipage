import React, { Component } from 'react';
import Nav from '../components/Nav.jsx';
import './index.scss';

class Index extends Component {
    render() {
        return (
            <div>
                <Nav />
                我是react渲染的index
            </div>
        )
    }
}

export default Index;