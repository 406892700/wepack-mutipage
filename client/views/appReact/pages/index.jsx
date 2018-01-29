import React, { Component } from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { toggle } from '../app/actions/testAction';

class Index extends Component {
    constructor() {
        super();
    }

    render() {
        const { flag, dispatch } = this.props;
        return (
            <div>
                <img src={require('./test.png')} alt=""/>
                <button onClick={() => dispatch(toggle())}>点击修改状态3</button>
                <SubCpt flag={flag}/>
            </div>
        );
    }
}

class SubCpt extends Component {
    render() {
        const { flag } = this.props;
        return (
            <div>
                {
                    flag ? '显示' : '隐藏2'
                }
            </div>
        );
    }
}

const props = (state) => {
    return state.toggle;
};

export default connect(props)(Index);
