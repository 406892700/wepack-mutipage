import React, { Component } from 'react';
import './index.scss';
import { connect } from 'react-redux';
import Nav from '../../components/Nav';

class Index extends Component {
    constructor() {
        super();
    }

    handleChange(e) {
        console.log(e);
    }

    render() {
        let { initData } = this.props;
        
        return (
            <div>
                <Nav/>
                <input type="text" onChange={this.handleChange.bind(this)}/>
                <ul>
                    {
                        initData.map((item, i) => {
                            return (<li key={i}>{ item.text }</li>);
                        })
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = ({ index }) => ({ initData: index });

export default connect(mapStateToProps)(Index);
