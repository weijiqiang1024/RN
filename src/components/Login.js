/**
 * Created by zll on 2017/6/6.
 */
import React, {Component, PropTypes} from 'react';
import { Button } from 'antd';

import './login.css'; 

// React component
export default class Login extends Component {
    static propTypes = {
         value:PropTypes.number,
         onIncreaseClick: PropTypes.func.isRequired,
         onDncreaseClick: PropTypes.func.isRequired
    };

    componentDidMount(){

    }

    increaseClick(){
        //const val = this.refs.keyword.value;
        this.props.onIncreaseClick(2);
    }

    dcreaseClick(){
        this.props.onDecareaseClick(1);
    }

    render() {
        
        debugger;
        return (
            <div className="wrapper">
                <span className="wrapper_text" ref="keyword">当前：{this.props.value}</span>   
                <Button type="primary" onClick={this.increaseClick.bind(this)}>Increase</Button>
                <Button type="danger" onClick={this.dcreaseClick.bind(this)}>Dcrease</Button>
            </div>
        )
    }
}



