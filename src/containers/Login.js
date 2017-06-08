/**
 * Created by zll on 2017/6/7.
 */
import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {loginSubmit,decreaseClick} from '../actions/Login';
import Login from '../components/Login';


// Map Redux state to component props
function mapStateToProps(state) {
    return {
        value: state.Login.count
    }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    //debugger;
    return {
        onIncreaseClick: (p) => {
            dispatch(loginSubmit(p))},
        onDecareaseClick: (p) => {
            dispatch(decreaseClick(p))}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);