/**
 * Created by zll on 2017/6/7.
 */
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute,hashHistory} from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import Store from './Store';
import AppMaster from './components/AppMaster';
import Login from './containers/Login';

export default class Routes extends Component {
    render() {
        return (
            <Provider store={Store()}>
                <Router history={hashHistory}>
                    <Route path="/" component={AppMaster}>
                        <IndexRoute component={Login}/>
                    </Route>
                </Router>
            </Provider>
        )
    }
}