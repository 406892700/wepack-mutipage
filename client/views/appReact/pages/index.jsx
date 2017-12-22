import React, { Component } from 'react';
import Nav from '../components/Nav';
import './index.scss';

class Index extends Component {
    constructor() {
        super();
        this.state = {
            a: 222
        };

    }

    fc() {
        console.log(new Date().getTime());
    }

    componentDidMount() {
        this.fc();
    }

    render() {
        return (
            <div>
                <Nav />
                我是react渲染的index
                {this.state.a}
            </div>
        );
    }
}

export default Index;
