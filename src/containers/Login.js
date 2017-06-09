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
    debugger;
    return {
        values: state.Login.values
    }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    debugger;
    return {
        onLoginClick: (p) => {
            debugger;
            dispatch(loginSubmit(p))},

        onDecareaseClick: () => {
            dispatch(decreaseClick())}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);